class UsersController < ApplicationController
  def index
    @profiles = Profile.all
  end

  def show
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path, :notice => "User deleted."
  end
end
