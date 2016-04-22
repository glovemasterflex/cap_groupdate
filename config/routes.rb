Rails.application.routes.draw do

  get 'users/index'

  get 'users/show'

  root "home#index"
  
  devise_for :users, controllers: {omniauth_callbacks: 'users/omniauth_callbacks'}

  resources :friendships
  
  resources :users do
    resources :profiles
  end

  # Custom GET
  get "/about", to: "home#about", as: "about"
  # Custom PUT

  # Custom POST

  # Custom DELETE
  
end