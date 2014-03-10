class AddTitleToLineItems < ActiveRecord::Migration
  def change
    add_column :line_items, :title, :string
  end
end
