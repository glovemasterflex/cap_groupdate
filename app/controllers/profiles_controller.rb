class ProfilesController < ApplicationController
  before_action :profile

  def index
  end

  def show
  end

  def new
  	@profile = Profile.new
    @user_id = current_user.id
  end

  def create
  	@profile = Profile.new(profile_params)
    if @profile.save
      current_user.profile = @profile
      render json: @profile
    else
      render json: { errors: @profile.errors.full_messages }
    end
  end

  def edit
  end

  def update
    if @profile.update(profile_params)
      flash[:notice] = 'Profile updated successfully!'
      redirect_to user_profile_path(current_user, @profile)
    else
      flash[:alert] = 'Profile not update, peeps!'
      render :edit
    end
  end

  private
  	def profile
      @profile = current_user.profile
  	end

  	def profile_params
  		params.require(:profile).permit(:first_name_one, :last_name_one, 
                                      :first_name_two, :last_name_two, 
                                      :age_one, :age_two, :hobbies, :location, :user_id)
  	end
end
