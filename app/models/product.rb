class Product < ActiveRecord::Base
  has_attached_file :picture, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/assets/missing/product/:style/picture.png"

  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
  #validates_attachment_file_name :picture, :matches => [/png\Z/, /jpe?g\Z/]
  do_not_validate_attachment_file_type :picture

  validates :title, :company_id, presence: true

  has_many :line_items
end
