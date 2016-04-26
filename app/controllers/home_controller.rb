class HomeController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @user = @current_user
  end
  
  def about
  end

end
