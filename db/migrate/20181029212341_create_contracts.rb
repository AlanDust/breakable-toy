class CreateContracts < ActiveRecord::Migration[5.2]
  def change
    create_table :contracts do |t|
      t.belongs_to :teacher
      t.belongs_to :student
    end
  end
end
