class Api::V1::OrdersController < ApplicationController
  respond_to :json
  before_filter :load_order

  def index
    respond_with current_company.orders.all
  end

  def current
    respond_with current_company.orders.find_or_create_by_aasm_state(aasm_state: 'open')
  end

  def show
    respond_with @order
  end

  def close
    @order.close!
    respond_with @order, location: nil
  end

  def load_order
    @order = current_company.orders.find(params[:id]) if params[:id]
  end
end
