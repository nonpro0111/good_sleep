class RakutenItem < ActiveRecord::Base
  paginates_per 15

  AVAILABLE_PERIOD = 7

  class << self
    def call_api
      params = {
        keyword: '安眠 ストレス ストレス解消',
        sort: '+reviewAverage',
        imageFlag: 1
      }

      RakutenWebService::Ichiba::Item.search(params)
    end

    def refresh(items)
      rakuten_items = []
      items.each do |item|
        next unless item['mediumImageUrls'].first
        rakuten_items << RakutenItem.new(
          name: item['itemName'],
          price: item['itemPrice'],
          image_url: item['mediumImageUrls'].first['imageUrl'],
          affiliate_url: item['affiliateUrl']
        )
      end

      # 既存データを削除して新しく入れなおす
      ActiveRecord::Base.transaction do
        self.delete_all
        self.import rakuten_items
      end
    end
  end

  def latest_data?
    created_at > Time.current - AVAILABLE_PERIOD.days
  end
end
