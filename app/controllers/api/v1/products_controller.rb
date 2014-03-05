class Api::V1::ProductsController < ApplicationController
  respond_to :json
  before_filter :load_product

  def index
    respond_with Product.all.to_a
  end

  #def create
  #  @order = Order.create
  #  render json: @order
  #end

  #def show
  #  respond_with @order
  #end

  def load_product
    @product = Product.find(params[:id]) if params[:id]
  end
end
