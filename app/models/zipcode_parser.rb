require 'httparty'
require 'pry'

class ZipcodeParser
  attr_reader :data

  def initialize
    @data = []
  end

  def search(query)
    response = HTTParty.get("https://cors-anywhere.herokuapp.com/zipcodeapi.com/rest/vkdAi7ka67oBtbu7flnAcQEKiI31oolmk1KFkKWtrcbvISaGkgviTuf2HVKnqf4w/radius.json/${this.state.current_user.zip}/${event.target.value}/miles")

    response["results"].each do |zipcode|


  end
end
