class CommentsController < ApplicationController
  def index
    @post = Post.find(params[:id])
    @comment = @post.comments
    render @comment
  end

  def create
    @comment = Comment.create(
      content: params[:content],
      user_id: current_user.id,
      post_id: params[:content]
    )
    render @comment
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update_attributes(content: params[:title])
    render @comment
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      head :no_content, status: :ok
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end
end
