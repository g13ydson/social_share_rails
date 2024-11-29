module SocialShareRails
  class Engine < ::Rails::Engine
    isolate_namespace SocialShareRails

    initializer "social_share_rails.assets.precompile" do |app|
      app.config.assets.precompile += %w[
        social_share_rails/social_share.css
        social_share_rails/social_share.js
      ]
    end

    initializer "social_share_rails.helpers" do
      ActiveSupport.on_load(:action_controller) do
        include SocialShareRails::ShareHelper
      end
    end

    initializer "social_share_rails.assets.manifest" do |app|
      app.config.assets.paths << root.join("app", "assets")
    end
  end
end
