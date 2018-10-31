class Api::V1::InterestsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Interest.all
  end

  def create
  interest = Interest.new(interest_params)

    if interest.save
      render json: interest
    else
      render json: { errors: interest.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    render json: Interest.find(params[:id])
  end

private
  def user_params
    params.require(:interest).permit(:user_id, :instrument_id)
  end
end
