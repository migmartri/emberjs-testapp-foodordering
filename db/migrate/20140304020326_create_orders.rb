class CreateOrders < ActiveRecord::Migration
  def change
    execute("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\"")
    create_table :orders, :id => :uuid do |t|
      t.timestamps
    end
  end
end
