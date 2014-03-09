class Api::V1::CompaniesController < ApplicationController
  respond_to :json

  def check_code
    if @company = Company.find_by(code: params[:code])
      session[:current_company_id] = @company.id
      render json: @company
    else
      render json: 'Invalid code', status: 400
    end
  end
end
