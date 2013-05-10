require File.join(File.expand_path(File.dirname(__FILE__)),
                  '../config/environment')
require 'rubygems'
require 'tweetstream'
require 'net/http'
require 'uri'

TweetStream.configure do |config|
  config.consumer_key       = ENV['CONSUMER_KEY']
  config.consumer_secret    = ENV['CONSUMER_SECRET']
  config.oauth_token        = ENV['OAUTH_TOKEN']
  config.oauth_token_secret = ENV['OAUTH_TOKEN_SECRET']
  config.auth_method        = :oauth
end

TweetStream::Client.new.track('nba') do |tweet|
  puts "#{tweet.text}"
  t = Tweet.create(:created_at => tweet.created_at,
                   :favorite_count => tweet.favorite_count,
                   :from_user_name => tweet.user.name,
                   :hashtags => tweet.hashtags,
                   :id_str => tweet.id.to_s,
                   :media => tweet.media,
                   :place => tweet.place,
                   :retweet_count => tweet.retweet_count,
                   :text => tweet.text,
                   :urls => tweet.urls,
                   :user_mentions => tweet.user_mentions)
end