class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_company

  def current_company
    return nil unless session[:current_company_id]
    @current_company ||= Company.find(session[:current_company_id])
  rescue
    return nil
  end


end
