class FriendshipsController < ApplicationController
  def create
  	@friendship = current_user.friendship.build(friend_id => params[:friend_id])
  	if @friendship.save
  		flash[:notice] = "You are now friends :)"
  		redirect_to "/"
  	else
  		flash[:error] = "Unable to add friend, try again."
  		redirect_to profile_show
  	end
  end

  def destroy
  	@friendship = current_user.friendship.find(params[:id])
  	@friendship.destroy
  	flash[:notice] = "You are no longer friends."
  	redirect_to profile_show
  end
end
