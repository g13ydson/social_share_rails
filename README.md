
# SocialShareRails

SocialShareRails is a Ruby on Rails gem that simplifies the process of adding social sharing buttons to your Rails applications. It supports multiple social platforms, customizable styles, and an easy-to-use API for sharing.

## Features

- Supports popular social platforms: Twitter, Facebook, Pinterest, LinkedIn, Reddit, Telegram, WhatsApp, and more.
- Customizable styles with rounded icons.
- JavaScript-based popup for sharing links.
- Easy integration with Rails views and assets pipeline.

---

## Installation

Add this line to your application's `Gemfile`:

```ruby
gem 'social_share_rails'
```

Then, execute:

```bash
bundle install
```

---

## Configuration

### Include the Assets

You can require the CSS and JavaScript files directly in your `application.js` and `application.css` (or `.scss`) files:

In `app/assets/stylesheets/application.css` (or `application.scss`):
```scss
@import "social_share_rails/social_share";
```

In `app/assets/javascripts/application.js`:
```javascript
//= require social_share_rails/social_share
```

If you're using Rails 7 with `importmap`, pin the JavaScript in your `config/importmap.rb`:

```ruby
pin "social_share_rails", to: "social_share_rails/social_share.js"
```

And import it in your `app/javascript/application.js`:

```javascript
import "social_share_rails"
```

---

## Usage

### Basic Example
Add the `social_share` helper to your views:

```erb
<%= social_share("Share this post", {
  url: "https://example.com",
  allow_sites: %w[twitter facebook linkedin],
  rounded: true
}) %>
```

### Options

- **title** (String): The title of the post to share.
- **url** (String): The URL to share.
- **image** (String): Optional image URL for platforms that support it.
- **desc** (String): Optional description of the content.
- **allow_sites** (Array): List of social platforms to include.
- **rounded** (Boolean): If `true`, uses rounded icon styles.

Example with more options:

```erb
<%= social_share("Check out this article", {
  url: "https://example.com/article",
  image: "https://example.com/image.jpg",
  desc: "This is an amazing article!",
  allow_sites: %w[twitter facebook pinterest],
  rounded: false
}) %>
```

---

## Supported Platforms

- Twitter
- Facebook
- Google Bookmarks
- Pinterest
- LinkedIn
- Reddit
- Telegram
- WhatsApp (App & Web)
- VKontakte
- Email

---

## I18n Support

SocialShareRails supports multiple languages using Rails' built-in I18n system. The gem provides default translations for the following keys:

```yaml
en:
  social_share_rails:
    share_to: Share to %{name}
    twitter: Twitter
    facebook: Facebook
    google_bookmark: Google Bookmark
    pinterest: Pinterest
    email: Email
    linkedin: Linkedin
    vkontakte: Vkontakte
    reddit: Reddit
    telegram: Telegram
    whatsapp_app: WhatsApp
    whatsapp_web: WhatsApp
```

To customize or add translations, create or modify the appropriate YAML file in your Rails application under `config/locales`. For example, to add translations in Portuguese:

```yaml
pt-BR:
  social_share_rails:
    share_to: Compartilhar no %{name}
    twitter: Twitter
    facebook: Facebook
    google_bookmark: Favoritos do Google
    pinterest: Pinterest
    email: Email
    linkedin: LinkedIn
    vkontakte: VKontakte
    reddit: Reddit
    telegram: Telegram
    whatsapp_app: WhatsApp (App)
    whatsapp_web: WhatsApp (Web)
```

After adding your translations, Rails will automatically use them based on the current locale.

---

## Customization

### Custom Styles
You can override the default styles provided by the gem. Add your own styles in `app/assets/stylesheets/application.scss`:

```scss
.social-share .share-icon {
  width: 30px;
  height: 30px;
  background-size: cover;
}

.social-share .share-twitter {
  background-image: url('/path/to/your/custom-twitter-icon.svg');
}
```

---

## Development

### Running Tests
To run the tests locally, use:

```bash
bundle exec rspec
```

---

## Contributing

Bug reports and pull requests are welcome on [GitHub](https://github.com/g13ydson/social_share_rails). This project is intended to be a safe, welcoming space for collaboration.

---

## License

The gem is available as open source under the terms of the [MIT License](LICENSE.txt).
