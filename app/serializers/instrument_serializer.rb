class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture

  has_many :interests
  has_many :users, through: :interests

end
