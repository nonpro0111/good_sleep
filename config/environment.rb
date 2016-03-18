# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

RakutenWebService.configuration do |c|
  c.application_id = ENV['RAKUTEN_APP_ID']
  c.affiliate_id = ENV['RAKUTEN_AFFILIATE_ID']
end
