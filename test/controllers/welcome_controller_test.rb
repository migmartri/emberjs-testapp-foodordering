require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get app" do
    get :app
    assert_response :success
  end

end
