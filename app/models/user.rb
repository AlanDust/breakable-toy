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

  has_many :taught_lessons, class_name: "Lesson", foreign_key: :teacher_id
  has_many :students, through: :taught_lessons, source: :student

  has_many :student_lessons, class_name: "Lesson", foreign_key: :student_id
  has_many :teachers, through: :student_lessons, source: :teacher

  def teacher?
    tole == "teacher"
  end

end
