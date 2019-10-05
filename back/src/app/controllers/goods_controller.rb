class GoodsController < ApplicationController
  before_action :authenticate_user!, except: [:destroy_all]

  def create
    @good = Good.create(
      user_id: current_user.id,
      post_id: params[:id]
    )
    @post = @good.post
    render json: @good
  end

  def destroy
    @good = Good.find_by(post_id: params[:id], user_id: current_user.id)
    if @good.destroy
      head :no_content, status: :ok
    else
      render json: @good.errors, status: :unprocessable_entity
    end
  end

  def destroy_all
    @good = Good.all
    if @good.destroy
      head :no_content, status: :ok
    else
      render json: @good.errors, status: :unprocessable_entity
    end
  end
end
