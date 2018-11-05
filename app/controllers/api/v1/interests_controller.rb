class Api::V1::InterestsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { interests: Interest.all, current_user: current_user }
  end

  def create
    interest = Interest.new(
      instrument_id: interest_params[:instrument_id],
      user: current_user
    )
    if interest.save
      render json: interest
    else
      render json: { errors: interest.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    render json: { interests: Interest.find(params[:id]), current_user: current_user }
  end

  def destroy
    interest = Interest.find_by(instrument_id: params[:instrument_id], user: current_user)
    interest.destroy
    render json: { interest_id: interest.id, current_user: current_user }
  end

private
  def interest_params
    params.require(:interest).permit(:instrument_id, :user_id)
  end
end
