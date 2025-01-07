require "spec_helper"

RSpec.describe SocialShareRails::SocialShareHelper do
  it "has a version number" do
    expect(SocialShareRails::VERSION).not_to be nil
  end

  it "generates social sharing buttons" do
    helper = Class.new { extend SocialShareRails::SocialShareHelper }
    html = helper.social_share("Share this post", {
      url: "https://example.com",
      allow_sites: %w[twitter facebook],
      rounded: true
    })

    expect(html).to include("share-twitter")
    expect(html).to include("share-facebook")
    expect(html).to include("rounded-twitter")
    expect(html).to include("rounded-facebook")
  end
end
