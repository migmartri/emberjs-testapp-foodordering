class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products, :id => :uuid do |t|
      t.string :name

      t.timestamps
    end
    add_attachment :products, :picture

  end
end
