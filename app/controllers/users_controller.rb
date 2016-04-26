class UsersController < ApplicationController
  def index
    @profiles = Profile.all
  end

  def show
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy

    if @user.destroy
        redirect_to root_url, notice: "User deleted."
    end
  end
end
