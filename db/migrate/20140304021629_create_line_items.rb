class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items, :id => :uuid do |t|
      t.uuid :product_id
      t.uuid :order_id
      t.integer :qty, default: 1
      t.timestamps
      t.index [:product_id, :order_id], unique:true
      t.index :order_id
    end
  end
end
