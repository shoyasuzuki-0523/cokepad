class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, methods: [:avatar_url]
  end

  def show
    @user = User.find(params[:id])
    @goods = @user.goods
    @good_posts = []
    for good in @goods do
      @good_posts.push(good.post)
    end
    render 'show', formats: 'json', handlers: 'jbuilder'
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      head :no_content, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
end
