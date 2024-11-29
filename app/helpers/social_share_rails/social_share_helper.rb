module SocialShareHelper
  def social_share(title = "", opts = {})
    opts[:allow_sites] ||= %w[twitter facebook google_bookmark pinterest email linkedin vkontakte reddit telegram whatsapp_app whatsapp_web]
    is_rounded = opts.delete(:rounded) || false

    html = []
    html << "<div class='social-share' data-title='#{h(title)}' data-img='#{opts[:image]}'"
    html << "data-url='#{opts[:url]}' data-desc='#{opts[:desc]}'>"

    opts[:allow_sites].each do |name|
      special_data = opts.select { |k, _| k.to_s.start_with?("data-" + name) }

      # Generate CSS class based on rounded option
      css_class = "share-icon share-#{name}"
      css_class += " rounded-#{name}" if is_rounded

      link_title = t("social_share.share_to", name: t("social_share.#{name.downcase}"))
      html << link_to("", "#", {
        rel: ["nofollow", opts[:rel]],
        "data-site": name,
        class: css_class,
        onclick: "return SocialShare.share(this);",
        title: h(link_title)
      }.merge(special_data))
    end

    html << "</div>"
    raw html.join("\n")
  end
end
