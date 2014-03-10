class LineItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :product
  validates :order_id, :product_id, presence: true
  before_create :denormalize_title

  private
  def denormalize_title
    self.title = self.product.title
  end
end
