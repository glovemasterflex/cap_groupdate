Rails.application.routes.draw do
  root "home#index"
  
  devise_for :users, controllers: {omniauth_callbacks: 'users/omniauth_callbacks'}

  # Custom GET

  # Custom PUT

  # Custom POST

  # Custom DELETE
  
end
