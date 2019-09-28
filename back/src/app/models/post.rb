class Post < ApplicationRecord
  has_many_attached :images
  belongs_to :user
  has_many :goods, dependent: :destroy

  def avatar_url
    avatar.attached? ?  url_for(images) : nil
  end
end
