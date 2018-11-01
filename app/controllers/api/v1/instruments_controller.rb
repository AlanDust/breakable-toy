class Api::V1::InstrumentsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { instruments: Instrument.all, current_user: current_user }
  end

  def create
    newInstrument = Instrument.new(instrument_params)

    if newInstrument.save
      render json: newBeer
    else
      render json: { errors: newInstrument.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Instrument.find(params[:id])
  end

  private

  def instrument_params
    params.require(:instrument).permit(:name)
  end
end
