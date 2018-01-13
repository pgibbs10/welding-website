Rails.application.routes.draw do

  get 'about', to: 'pages#about'

  get 'services', to: 'pages#services'

  get 'gallery', to: 'pages#gallery'

  root to: 'pages#home'

end
