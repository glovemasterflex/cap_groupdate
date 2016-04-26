Rails.application.routes.draw do
  root "home#index"
  
  devise_for :users, controllers: {omniauth_callbacks: 'users/omniauth_callbacks'}

  resources :friendships
  
  resources :users do
    resources :profiles
  end

  resources :conversations do
    resources :messages
  end

  # Custom GET
  get "/about", to: "home#about", as: "about"
  get '/profiles/profile_search', to: 'profiles#profile_search'

  # Custom PUT

  # Custom POST

  # Custom DELETE
  
end