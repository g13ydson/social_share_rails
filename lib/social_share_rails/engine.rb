module SocialShareRails
  class Engine < ::Rails::Engine
    isolate_namespace SocialShareRails

    # Add the gem's assets to the Rails asset pipeline
    initializer "social_share_rails.assets.paths" do |app|
      app.config.assets.paths << root.join("app", "assets", "javascripts")
      app.config.assets.paths << root.join("app", "assets", "stylesheets")
      app.config.assets.paths << root.join("app", "assets", "images")
    end

    # Configure the files for precompilation
    initializer "social_share_rails.assets.precompile" do |app|
      app.config.assets.precompile += %w[
        social_share_rails/social_share.js
        social_share_rails/social_share.scss
        social_share_rails/*.svg
        social_share_rails/*.png
        social_share_rails/*.jpg
        social_share_rails/*.webp
      ]
    end

    # Include the helper in the context of Rails views
    initializer "social_share_rails.helpers" do
      ActiveSupport.on_load(:action_view) do
        include SocialShareRails::SocialShareHelper
      end
    end
  end
end
