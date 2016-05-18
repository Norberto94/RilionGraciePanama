class Student < ActiveRecord::Base
  validates :nombre, :fecha_de_nacimiento, :rango, presence:true
  validates :celular, length: { minimum: 8 }
end
