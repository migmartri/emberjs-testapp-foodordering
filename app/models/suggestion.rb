class Suggestion < ActiveRecord::Base
  validates :order_id, :text, presence: true
  belongs_to :order
end
