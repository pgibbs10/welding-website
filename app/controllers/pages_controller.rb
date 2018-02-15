class PagesController < ApplicationController
  def home
  end

  def about
  end

  def services
  end

  def gallery
  end

  def contact
    @contact = Contact.new
  end
end
