class User < ActiveRecord::Base
	has_many :friendships
	has_many :friends, :through => :friendships
	has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"
	has_many :inverse_friends, :through => :inverse_friendships, :source => :user
  acts_as_messageable

  # has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  # validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:facebook]
  
  has_one :profile

  def self.from_omniauth(facebook_info)
    where(provider: facebook_info.provider, uid: facebook_info.uid).first_or_create do |user|
 		 user.email = facebook_info.info.email
 		 user.password = Devise.friendly_token
 	  end         
  end

  def name
    "#{profile.first_name_one} & #{profile.first_name_two}"
  end

  def mailboxer_email(object)
    nil
  end
end
