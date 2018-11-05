class InterestSerializer < ActiveModel::Serializer
  attributes :instrument_id, :user_id, :id

  belongs_to :user
  belongs_to :instrument

end
