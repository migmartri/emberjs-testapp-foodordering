class LineItemSerializer < ActiveModel::Serializer
 attributes :id, :created_at, :order_id, :product_id, :qty, :title, :updated_at
 has_one :product, embed: :id, key: :product_id, include: true
end
