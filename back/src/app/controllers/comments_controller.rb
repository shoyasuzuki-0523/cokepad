class CommentsController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments
    render json: @comments
  end

  def create
    @comment = Comment.create(
      content: params[:content],
      user_id: current_user.id,
      post_id: params[:post_id]
    )
    render json: @comment
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update_attributes(content: params[:title])
    render json: @comment
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
