class CreateSuggestions < ActiveRecord::Migration
  def change
    create_table :suggestions, :id => :uuid do |t|
      t.uuid :order_id
      t.text :text
      t.timestamps
    end
  end
end
