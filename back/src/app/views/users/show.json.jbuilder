json.id @user.id
json.name @user.name
json.email @user.email
json.created_at @user.created_at
json.updated_at @user.updated_at
json.set! :posts do
  json.array! @user.posts do |post|
    json.id post.id
    json.title post.title
    json.content post.content
    json.created_at post.created_at
    json.updated_at post.updated_at
    json.user  post.user
  end
end
json.set! :goods do
  json.array! @good_posts do |post|
    json.id post.id
    json.title post.title
    json.content post.content
    json.created_at post.created_at
    json.updated_at post.updated_at
    json.user  post.user
  end
end