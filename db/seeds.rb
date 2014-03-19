require 'csv'
require 'net/http'
require 'uri'

company = Company.find_or_create_by_name name: 'Demo company', code: 'demo'

CSV.foreach(File.join(Rails.root, 'resources', "import.csv"), :headers => true, :encoding => 'utf-8') do |row|

  puts "Importing #{row[0]}"
  product = company.products.find_or_initialize_by_title title: row[0]
  image_url = File.join("https://dl.dropboxusercontent.com/u/200236/food_images/", row[1]) if row[1]
  
  if image_url
    uri = URI.parse(image_url)
    Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
      resp = http.get(uri.path)
      file = Tempfile.new(['picture', '.' + row[1].scan(/(png|jpe?g|gif)/).first.first], '/tmp', 'wb+')
      file.write(resp.body.force_encoding("UTF-8"))
      file.flush
      product.picture = file
    end
  end
  product.save!
end

