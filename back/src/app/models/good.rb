class Good < ApplicationRecord
  belongs_to :user
  belongs_to :post
<<<<<<< HEAD

  validates :user_id, :uniqueness => {:scope => :post_id}
=======
>>>>>>> b561f8e94dbedb09885001e984577885a46b2ca9
end
