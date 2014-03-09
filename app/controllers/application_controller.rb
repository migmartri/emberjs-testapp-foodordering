class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_company
    return nil unless session[:current_company]
    @current_company ||= Company.find(session[:current_company])
  end
end
