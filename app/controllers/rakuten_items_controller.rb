class RakutenItemsController < ApplicationController

  def index
    items = RakutenWebService::Ichiba::Item.search(:keyword => 'ストレス 睡眠')
    @rakuten_items = []
    items.each do |item|
      next unless item['mediumImageUrls'].first
      @rakuten_items << RakutenItem.new(
        name: item['itemName'],
        price: item['itemPrice'],
        image_url: item['mediumImageUrls'].first['imageUrl'],
        affiliate_url: item['affiliateUrl']
      )
    end
  #  RakutenItem.import rakuten_items
  end
end
