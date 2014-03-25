class ProductSerializer < ActiveModel::Serializer
 attributes :id, :created_at, :title, :picture_thumb, :picture_medium

 def picture_thumb
   object.picture.url(:thumb, false)
 end

 def picture_medium
   object.picture.url(:medium, false)
 end
end
