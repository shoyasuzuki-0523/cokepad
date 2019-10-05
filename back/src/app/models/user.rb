# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
  include Rails.application.routes.url_helpers

  has_one_attached :avatar
  has_many :posts, dependent: :destroy
  has_many :goods
<<<<<<< HEAD
  has_many :comments, dependent: :destroy
=======
>>>>>>> b561f8e94dbedb09885001e984577885a46b2ca9
  
  def avatar_url
    avatar.attached? ?  url_for(avatar) : url_for("https://api-rails-cokepad.s3-ap-northeast-1.amazonaws.com/19827.jpg")
  end
end
