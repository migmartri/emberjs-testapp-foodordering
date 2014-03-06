class LineItemSerializer < ActiveModel::Serializer
 attributes :id, :created_at, :order_id, :product_id, :qty
 has_one :product, embed: :id, key: :product_id, include: true
end
