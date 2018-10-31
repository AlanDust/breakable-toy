class Instrument < ApplicationRecord

  validates :name, presence: true
  validates :picture, presence: true

  has_many :interests
  has_many :users, through: :interests

end
