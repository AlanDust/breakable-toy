class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :encrypted_password, presence: true
  validates :age, presence: true
  validates :role, presence: true

  has_many :student_contracts, class_name: "Contract", foreign_key: :student_id
  has_many :teachers, through: :student_contract, source: :teacher

# methods that a teacher would call
  has_many :taught_contract, class_name: "Contract", foreign_key: :teacher_id
  has_many :students, through: :taught_contract, source: :student

  def teacher?
    role == "teacher"
  end

end
