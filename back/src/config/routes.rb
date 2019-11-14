Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  resources :posts
  resources :users, :only => [:index, :show, :destroy]
  resources :comments, :only => [:index, :create, :update, :destroy]
  resources :goods, :only => [:create, :destroy]
  delete 'good/destroy_all' => 'goods#destroy_all'
end