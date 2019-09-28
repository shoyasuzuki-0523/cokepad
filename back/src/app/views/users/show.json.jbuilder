json.id @user.id
json.title @user.name
json.content @user.email
json.created_at @user.created_at
json.updated_at @user.updated_at
json.posts @user.posts
json.goods do |good|
  json.array!(@good_posts) do |post|
    good.post post
  end
end