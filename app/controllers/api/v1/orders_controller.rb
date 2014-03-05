class Api::V1::OrdersController < ApplicationController
  respond_to :json
  before_filter :load_order

  def index
    if params[:current]
      respond_with Order.open
    else
      respond_with Order.all
    end
  end

  def create
    @order = Order.create
    render json: @order
  end

  def show
    respond_with @order
  end

  def load_order
    @order = Order.find(params[:id]) if params[:id]
  end
end
