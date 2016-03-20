class RakutenItemsController < ApplicationController
  before_action :refresh_items, only: :index

  def index
    @rakuten_items = RakutenItem.all.page(params[:page])
    @total_item_count = RakutenItem.all.size
  end

  private
    # 本当は、workerとかで動かしたい
    def refresh_items
      item = RakutenItem.last
      unless item.try(:latest_data?)
        new_items = RakutenItem.call_api
        RakutenItem.refresh(new_items)
      end
    end
end
