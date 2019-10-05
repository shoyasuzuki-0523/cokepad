class Post < ApplicationRecord
  belongs_to :user
  has_one_attached :images
  has_many :goods, dependent: :destroy
  has_many :comments, dependent: :destroy

  def avatar_url
    avatar.attached? ?  url_for(images) : nil
  end
end
