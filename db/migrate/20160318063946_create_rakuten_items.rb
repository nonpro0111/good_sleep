class CreateRakutenItems < ActiveRecord::Migration
  def change
    create_table :rakuten_items do |t|
      t.string :name
      t.integer :price
      t.string :image_url
      t.string :affiliate_url

      t.timestamps null: false
    end
  end
end
