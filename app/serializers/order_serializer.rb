class OrderSerializer < ActiveModel::Serializer
 attributes :id, :created_at
 has_many :line_items, embed: :id, key: :line_items, include: true
end
