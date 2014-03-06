class ProductSerializer < ActiveModel::Serializer
 attributes :id, :created_at, :title, :picture_thumb, :picture_medium
 #has_many :line_items, embed: :id, key: :line_item_ids, include: true

 def picture_thumb
   object.picture.url(:thumb, false)
 end

 def picture_medium
   object.picture.url(:medium, false)
 end
end
