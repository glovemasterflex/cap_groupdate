class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :first_name_one, null: false
      t.string :last_name_one, null: false
      t.string :first_name_two, null: false
      t.string :last_name_two, null: false
      t.string :location, null: false
      t.string :age_one, null: false
      t.string :age_two, null: false
      t.string :hobbies, null: false
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
