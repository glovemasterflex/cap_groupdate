class UsersController < ApplicationController
  def index
    @profiles = Profile.all
  end

  def show
  end

  def destroy
    @user = User.find(params[:id])

    if @user.destroy
      redirect_to new_user_registration_path, :notice => "User deleted."
    end
  end
end
