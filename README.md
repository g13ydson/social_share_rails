# SocialShareRails

**SocialShareRails** is a Ruby on Rails gem that simplifies adding social sharing buttons to your application. It supports multiple social platforms with customizable styles and JavaScript for seamless integration.

---

## Features

- **Support for Popular Platforms**: Twitter, Facebook, LinkedIn, Reddit, WhatsApp, Telegram, and more.
- **Customizable Appearance**: Add rounded icons with a single option.
- **Dynamic Social Sharing Buttons**: Easily configure the sites to be displayed.
- **Optimized Sharing**: Built-in JavaScript for opening sharing popups and tracking clicks.
- **Rails Compatible**: Works with Rails >= 4.2.

---

## Installation

1. Add the gem to your Gemfile:

   ```ruby
   gem 'social_share_rails'
   ```

2. Run the bundle command to install the gem:

   ```bash
   bundle install
   ```

3. Add the required assets to your application:

   For Rails < 6:
   ```erb
   <%= stylesheet_link_tag 'social_share_rails', media: 'all' %>
   <%= javascript_include_tag 'social_share_rails' %>
   ```

   For Rails >= 6:
   Add the gem's manifest to your `app/assets/config/manifest.js`:
   ```javascript
   //= link social_share_rails.css
   //= link social_share_rails.js
   ```

---

## Usage

### Adding Social Sharing Buttons

Use the `social_share` helper method in your views to generate sharing buttons:

```erb
<%= social_share("Share this post", {
  url: "https://example.com",
  desc: "Check out this amazing post!",
  allow_sites: %w[twitter facebook whatsapp_web reddit],
  rounded: true
}) %>
```

### Options

- `title`: The title of the content being shared (optional).
- `url`: The URL to share.
- `desc`: A description of the content (optional).
- `image`: The image URL (used by platforms like Pinterest).
- `allow_sites`: An array of social platforms to display.
  - Available platforms: `twitter`, `facebook`, `google_bookmark`, `pinterest`, `email`, `linkedin`, `vkontakte`, `reddit`, `telegram`, `whatsapp_app`, `whatsapp_web`.
- `rounded`: Adds a rounded style to all icons when set to `true` (default is `false`).

---

### Examples

#### Standard Icons
```erb
<%= social_share("Share this article", {
  url: "https://example.com",
  desc: "Learn how to use SocialShareRails!",
  allow_sites: %w[twitter facebook linkedin]
}) %>
```

#### Rounded Icons
```erb
<%= social_share("Share this article", {
  url: "https://example.com",
  desc: "Learn how to use SocialShareRails!",
  allow_sites: %w[twitter facebook linkedin],
  rounded: true
}) %>
```

---

## Customizing Styles

The gem provides default styles for social sharing icons, but you can override them in your own CSS:

```css
.social-share .share-icon {
  height: 30px;
  width: 30px;
  background-size: 30px 30px;
}

.social-share .rounded-twitter {
  background-image: asset-url('social_share/rounded-twitter.webp');
}
```

---

## JavaScript Integration

The gem includes JavaScript functionality for opening sharing popups and handling button clicks. This is done automatically, but you can also call the methods manually:

- `SocialShare.openUrl(url, width, height)`: Opens a popup window with the specified dimensions.
- `SocialShare.share(element)`: Triggers the sharing logic for the given button.

---

## Development

To contribute to the gem, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push your branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

