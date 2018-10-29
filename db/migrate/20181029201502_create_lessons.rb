class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.string :timeslot, null: false

      t.belongs_to :student
      t.belongs_to :teacher

      t.timestamps null: false
    end
  end
end
