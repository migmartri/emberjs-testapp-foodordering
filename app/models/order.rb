class Order < ActiveRecord::Base
  include AASM
  belongs_to :company
  has_many :line_items
  has_many :suggestions
  has_many :products, through: :line_items

  validates :company_id, presence: true
  validate :only_one_open, on: 'create'

  aasm do
    state :open, :initial => true
    state :closed, :before_enter => :set_closed_time

    event :close do
      transitions :from => :open, :to => :closed
    end
  end

  def only_one_open
    errors.add(:aasm_state, "There is already an open order") if self.company.orders.open.count > 0
  end

  def set_closed_time
    self.closed_at = Time.now
  end
end
