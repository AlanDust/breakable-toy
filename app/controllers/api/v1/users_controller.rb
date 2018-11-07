class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if params[:search]
      @zipcodes = ZipcodeParser.search(params[:search])
      @users = User.where(zip: @zipcodes)
      render json: @users
    else
       render json: { users: User.all, current_user: current_user }
    end
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

  def search
    distance = params[:distance]
    zip = params[:zip]
    zipcode_parser = ZipcodeParser.new
    zipcode_parser.search(zip, distance)

    render json: { data: zipcode_parser.data }
  end

private
  def user_params
    params.require(:user).permit(:email, :id, :first_name, :last_name, :short_bio, :long_bio, :lesson_location, :zip, :encrypted_password, :age, :profile_photo, :role, :calendar)
  end
end
