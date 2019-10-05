class PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  require 'aws-sdk-s3'

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
    @goods = @post.goods
    @good_users = []
    for good in @goods do
      @good_users.push(good.user)
    end
    render 'post', formats: 'json', handlers: 'jbuilder'
  end

  private

  def put_presigned_url(object_name)
    object = Aws::S3::Resource.new(:amazon).bucket('api-rails-cokepad').object(object_name)
    url = URI.parse(object.presigned_url(:put, expires_in: 30))
    return url
  end

  def get_presigned_url(object_name)
    object = Aws::S3::Resource.new(:amazon).bucket('api-rails-cokepad').object(object_name)
    url = URI.parse(object.presigned_url(:get, expires_in: 30))
    return url
  end
end