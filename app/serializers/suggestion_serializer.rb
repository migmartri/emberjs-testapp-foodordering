class SuggestionSerializer < ActiveModel::Serializer
 attributes :id, :text, :order_id, :created_at
end
