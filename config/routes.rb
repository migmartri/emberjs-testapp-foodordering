Peoplefood::Application.routes.draw do
  #get "welcome/app"
  root 'welcome#app'

  namespace :api do
    namespace :v1 do
      resources :orders
      resources :line_items
      resources :products
    end
  end

  get '*url' => 'welcome#app'
end
