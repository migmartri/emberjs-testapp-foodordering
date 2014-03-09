class Company < ActiveRecord::Base
  has_many :products
  has_many :orders
  validates :name, :code, presence: true
end
