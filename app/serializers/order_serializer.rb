class OrderSerializer < ActiveModel::Serializer
 attributes :id, :created_at, :closed_at, :aasm_state, :order_number, :line_items_count
 has_many :line_items, embed: :id, key: :line_item_ids, include: true
 has_many :suggestions, embed: :id, key: :suggestion_ids, include: true
 #has_many :products, embed: :id, key: :product_ids, include: true
 
 def include_line_items?
   scope && scope[:include_line_items]
 end

 def include_suggestions?
   scope && scope[:include_suggestions]
 end

 def line_items_count
   self.line_items.to_a.sum(&:qty)
 end
end
