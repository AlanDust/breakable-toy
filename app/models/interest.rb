class Interest < ApplicationRecord
  belongs_to :instrument
  belongs_to :user

  validates :instrument, uniqueness: { scope: :user}

end
