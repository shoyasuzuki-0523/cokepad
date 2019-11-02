json.id @post.id
json.title @post.title
json.content @post.content
json.created_at @post.created_at
json.updated_at @post.updated_at
json.user  @post.user
json.goods @good_users
json.set! :comments do
  json.array! @post.comments do |comment|
    json.id comment.id
    json.content comment.content
    json.created_at comment.created_at
    json.updated_at comment.updated_at
    json.user  comment.user
  end
end