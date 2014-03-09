class Api::V1::OrdersController < ApplicationController
  respond_to :json
  before_filter :load_order

  def index
    if params[:current]
      respond_with current_company.orders.open
    else
      respond_with current_company.orders.all
    end
  end

  def create
    @order = current_company.orders.create
    render json: @order
  end

  def show
    respond_with @order
  end

  def close
    @order.close!
    render json: @order
  end

  def load_order
    @order = current_company.orders.find(params[:id]) if params[:id]
  end
end
