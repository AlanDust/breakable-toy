class Lesson < ApplicationRecord

  belongs_to :teacher, class_name: "Lesson"
  belongs_to :student, class_name: "Lesson"
end
