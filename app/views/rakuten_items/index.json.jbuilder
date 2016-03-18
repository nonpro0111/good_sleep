json.array!(@rakuten_items) do |item|
  json.extract! item, :name, :price, :affiliate_url, :image_url
end
