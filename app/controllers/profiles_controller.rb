class ProfilesController < ApplicationController

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
      render json: profile
    else
      render json: { errors: profile.errors.full_messages }
    end
  end

  def edit
  end

  def update
  end

  private
  	def profile
  	end

  	def profile_params
  		params.require(:profile).permit(:first_name_one, :last_name_one, :first_name_two, :last_name_two, :age_one, :age_two, :hobbies, :location)
  	end
end
