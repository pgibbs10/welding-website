Rails.application.routes.draw do

  resources :contacts, only: [:new, :create]

  get 'about', to: 'pages#about'

  get 'services', to: 'pages#services'

  get 'gallery', to: 'pages#gallery'

  get 'contact', to: 'pages#contact'

  get 'contacts', to: 'pages#contact'

  root to: 'pages#home'

end
