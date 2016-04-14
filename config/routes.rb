Rails.application.routes.draw do
<<<<<<< HEAD

=======
  resources :meetings
>>>>>>> glover
  root "home#index"
  
  devise_for :users, controllers: {omniauth_callbacks: 'users/omniauth_callbacks'}

  resources :profiles

  # Custom GET

  # Custom PUT

  # Custom POST

  # Custom DELETE
  
end
