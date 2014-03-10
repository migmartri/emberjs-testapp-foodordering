class OrderSerializer < ActiveModel::Serializer
 attributes :id, :created_at
 has_many :line_items, embed: :id, key: :line_item_ids, include: true
 #has_many :suggestions, embed: :id, key: :suggestion_ids, include: true
 #has_many :products, embed: :id, key: :product_ids, include: true
end
