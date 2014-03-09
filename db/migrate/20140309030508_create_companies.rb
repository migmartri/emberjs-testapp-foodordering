class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies, :id => :uuid do |t|
      t.string :name
      t.string :code, index: true
      t.timestamps
    end

    add_column :products, :company_id, :uuid
    add_column :orders, :company_id, :uuid

    add_index :products, :company_id
    add_index :orders, :company_id
  end
end
