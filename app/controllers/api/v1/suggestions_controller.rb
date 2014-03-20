class Api::V1::SuggestionsController < ApplicationController
  respond_to :json

  before_filter :load_order

  def create
    @suggestion = @order.suggestions.create(suggestion_params)
    respond_with @suggestion, location: nil
  end

  def destroy
    @order.suggestions.find(params[:id]).destroy
    render text: 'OK'
  end

  def suggestion_params
    params.require(:suggestion).permit([:text])
  end

  def load_order
    @order = current_company.orders.open.first
    render text: 'Not found', status: 400 unless @order
  end
end
