class LineItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :product
  validates :order_id, :product_id, presence: true
  before_create :denormalize_title
  after_update :broadcast_update
  after_create :broadcast_create
  before_destroy :broadcast_delete

  def broadcast_update
    send_message('updated')
  end

  def broadcast_create
    send_message('created')
  end

  def broadcast_delete
    send_message('deleted')
  end

  def send_message(message)
    WebsocketRails["order-#{self.order_id}"].trigger('line_item_' + message, LineItemSerializer.new(self).to_json)
  end

  private
  def denormalize_title
    self.title = self.product.title
  end
end
