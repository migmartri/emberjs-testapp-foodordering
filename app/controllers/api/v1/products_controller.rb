class Api::V1::ProductsController < ApplicationController
  respond_to :json
  before_filter :load_product

  def index
    respond_with Product.all.to_a
  end

  def create
    @product = Product.create(product_params)
    render json: @product
  end

  def update
    @product = @product.update_attributes(product_params)
    render json: @product
  end

  def destroy
    @product.destroy
    render json: true
  end

  #def show
  #  respond_with @order
  #end

  def product_params
    params.require(:product).permit([:title])
  end

  #def setup_avatar
  #  if avatar_info = params[:user][:avatar]
  #    header, data = avatar_info.split(',')
  #    file = Tempfile.new('avatar')
  #    base= Base64.decode64(data)
  #    file.binmode
  #    file.write(base)
  #    file.flush
  #    current_user.avatar = file
  #  end
  #end

  def load_product
    @product = Product.find(params[:id]) if params[:id]
  end
end
