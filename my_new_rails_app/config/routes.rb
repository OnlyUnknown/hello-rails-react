Rails.application.routes.draw do
  root 'static#home'
  namespace :api do
    namespace :v1 do
      get 'random_greeting', to: 'greetings#random_greeting'
    end
  end
end
