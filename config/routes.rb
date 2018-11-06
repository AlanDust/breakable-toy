Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :instruments, only: [:index, :create, :show] do
        resources :users, only: [:index, :create, :show]
        resources :interests, only: [:index, :create, :show, :destroy]
      end
      resources :interests, only: [:index, :create, :show]
    end
  end
  get '/instruments', to: 'homes#index'
  get '/instruments/:id', to: 'homes#index'
  get '/instruments/:instrument_id/users/:id', to: 'homes#index'
  get '/zipcodes', to: 'zipcodes#search'

end
