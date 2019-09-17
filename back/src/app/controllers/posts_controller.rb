class PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @posts = Post.all
    render 'index', formats: 'json', handlers: 'jbuilder'
  end

  def create
    @post = Post.create(title: params[:title], content: params[:content], user_id: current_user.id)
    render 'post', formats: 'json', handlers: 'jbuilder'
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attributes(title: params[:title], content: params[:content])
    render 'post', formats: 'json', handlers: 'jbuilder'
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      head :no_content, status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def show
    @post = Post.find(params[:id])
    render 'post', formats: 'json', handlers: 'jbuilder'
  end
end