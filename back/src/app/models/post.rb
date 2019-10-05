class Post < ApplicationRecord
  belongs_to :user
<<<<<<< HEAD
  has_one_attached :images
  has_many :goods, dependent: :destroy
  has_many :comments, dependent: :destroy
=======
  has_many :goods, dependent: :destroy
>>>>>>> b561f8e94dbedb09885001e984577885a46b2ca9

  def avatar_url
    avatar.attached? ?  url_for(images) : nil
  end
end
