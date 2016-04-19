Rails.application.routes.draw do

  resources :meetings
  root "home#index"
  
  devise_for :users, controllers: {omniauth_callbacks: 'users/omniauth_callbacks'}

  resources :users do 
  	resources :profiles
  end

  resources :friendships

  # Custom GET

  # Custom PUT

  # Custom POST

  # Custom DELETE
  
end
