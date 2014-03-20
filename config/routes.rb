Peoplefood::Application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :orders do
        member do
          post :close
        end
      end
      resources :line_items
      resources :suggestions
      resources :products
      resources :companies do
        collection do
          post :check_code
          post :logout
        end
      end
    end
  end

  get 'app' => 'welcome#app'
  get 'app/*url' => 'welcome#app'
  root 'welcome#app'
end
