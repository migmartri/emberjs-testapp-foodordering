class LineItemSerializer < ActiveModel::Serializer
 attributes :id, :created_at, :order_id, :product_id, :qty
end
