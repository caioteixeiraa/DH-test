class CreateClientes < ActiveRecord::Migration[6.0]
  def change
    create_table :clientes do |t|
      t.string :name
      t.string :cpf
      t.string :email
      t.string :phone
      t.string :endereco

      t.timestamps
    end
  end
end
