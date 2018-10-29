class CreateInstruments < ActiveRecord::Migration[5.2]
  def change
    create_table :instruments do |t|
      t.string :type, null: false

      t.timestamps null: false
    end
  end
end
