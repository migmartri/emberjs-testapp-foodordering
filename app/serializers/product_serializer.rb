class ProductSerializer < ActiveModel::Serializer
 attributes :id, :created_at, :title, :picture_thumb

 def picture_thumb
   object.picture.url(:thumb)
 end
end
