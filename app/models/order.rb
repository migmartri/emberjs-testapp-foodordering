class Order < ActiveRecord::Base
  include AASM
  belongs_to :company
  has_many :line_items
  has_many :suggestions
  has_many :products, through: :line_items

  before_create :generate_order_number
  validates :company_id, presence: true
  validate :only_one_open, on: 'create'

  aasm do
    state :open, :initial => true
    state :closed, before_enter: 'set_closed_time'

    event :close, after: 'broadcast_closed' do
      transitions :from => :open, :to => :closed
    end
  end

  def only_one_open
    errors.add(:aasm_state, "There is already an open order") if self.company.orders.open.count > 0
  end

  def set_closed_time
    self.closed_at = Time.now
  end

  def broadcast_closed
    WebsocketRails["order-#{self.id}"].trigger('order_closed', self.id)
  end

  protected
  def generate_order_number
    possible_values = 'abfhijlqrstuxy'.upcase.split('') | '123456789'.split('')

    record = true
    while record
      random = Array.new(5){possible_values[rand(possible_values.size)]}.join
      random = Time.now.to_date.to_s + '-' + random
      record = Order.where(order_number: random).first
    end 
    self.order_number = random
  end
end
