Peoplefood::Application.routes.draw do
  #get "welcome/app"
  root 'welcome#app'

  namespace :api do
    namespace :v1 do
      resources :orders do
        member do
          post :close
        end
      end
      resources :line_items
      resources :products
      resources :companies do
        collection do
          post :check_code
          post :logout
        end
      end
    end
  end

  get '*url' => 'welcome#app'
end
