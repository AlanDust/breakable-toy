class Instrument < ApplicationRecord

  validates :name, presence: true

  has_many :interests
  has_many :users, through: :interest

end
