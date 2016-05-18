class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :nombre
      t.date :fecha_de_nacimiento
      t.string :celular
      t.string :rango
      t.string :email

      t.timestamps null: false
    end
  end
end
