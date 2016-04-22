class UsersController < ApplicationController
  def index
    @profile = Profile.all
  end

  def show
  end
end
