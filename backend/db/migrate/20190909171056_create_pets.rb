class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :raca
      t.string :porte

      t.timestamps
    end
  end
end
