class CreateInterests < ActiveRecord::Migration[5.2]
  def change
    create_table :interests do |t|

      t.belongs_to :instrument
      t.belongs_to :user
    end
  end
end
