class AddOrderNumberToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :order_number, :string, unique: true
  end
end
