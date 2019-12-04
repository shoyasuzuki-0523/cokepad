Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  resources :posts
  resources :users, :only => [:index, :show, :destroy]
  get 'comments/:post_id' => 'comments#index'
  resources :comments, :only => [:create, :update, :destroy]
  resources :goods, :only => [:create, :destroy]
  delete 'good/destroy_all' => 'goods#destroy_all'
end