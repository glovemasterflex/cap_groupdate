Rails.application.routes.draw do
  root "home#index"
  
  devise_for :users, controllers: {
    registrations: "users/registrations"
  }

  # Custom GET

  # Custom PUT

  # Custom POST

  # Custom DELETE
  
end
