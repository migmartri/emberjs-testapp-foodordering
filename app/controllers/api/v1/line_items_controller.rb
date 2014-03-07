class Api::V1::LineItemsController < ApplicationController
  respond_to :json
  #before_filter :load_order

  def create
 #   @order = Order.create
    @line_item = LineItem.create(line_items_params)
    render json: @line_item
  end

  def update
    @line_item = LineItem.find(params[:id]).update_attribute(:qty, line_items_params[:qty])
    respond_with @line_item
  end

  def destroy
    respond_with LineItem.find(params[:id]).destroy


  end

  def line_items_params
    params.require(:line_item).permit([:qty, :product_id, :order_id])
  end

end
