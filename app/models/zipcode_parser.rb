require 'httparty'

class ZipcodeParser
  attr_reader :data

  def initialize
    @data = []
  end

  def search(zip, distance)
    search_url = "https://www.zipcodeapi.com/rest/#{ENV["RADIUS_KEY"]}/radius.json/#{zip}/#{distance}/miles"
    response = HTTParty.get(search_url)
    response["zip_codes"].each do |zipcode|

      @data << zipcode["zip_code"]
    end
  end
end
