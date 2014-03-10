class Api::V1::ProductsController < ApplicationController
  respond_to :json
  before_filter :load_product
  #before_filter :setup_picture, only: [:create, :update]

  def index
    respond_with current_company.products.load
  end

  def show
    render json: @product
  end

  def create
    @product = current_company.products.create(product_params)
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
    params.require(:product).permit([:title]).merge(picture: setup_picture)
  end

  def setup_picture
    return nil if params[:product][:picture] == 'none'
    if picture_info = params[:product][:picture]
      header, data = picture_info.split(',')
      # Paperclip 4.0 force us to create the file using the extension
      file = Tempfile.new(['picture', '.' + header.scan(/(png|jpe?g|gif)/).first.first])
      base= Base64.decode64(data)
      file.binmode
      file.write(base)
      file.flush
      #@product.picture = file
      file
    end
  end

  def load_product
    @product = current_company.products.find(params[:id]) if params[:id]
  end
end
