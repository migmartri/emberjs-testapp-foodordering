class Order < ActiveRecord::Base
  include AASM
  has_many :line_items
  has_many :products, through: :line_items

  validate :only_one_open, on: 'create'

  aasm do
    state :open, :initial => true
    state :closed

    event :close do
      transitions :from => :open, :to => :closed
    end
  end

  def only_one_open
    errors.add(:aasm_state, "There is already an open order") if Order.open.count > 0
  end
end
