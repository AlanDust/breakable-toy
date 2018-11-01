class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { users: User.all, current_user: current_user }
  end

  def create
  user = User.new(user_params)

    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    render json: User.find(params[:id])
  end

private
  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :bio, :lesson_location)
  end
end
