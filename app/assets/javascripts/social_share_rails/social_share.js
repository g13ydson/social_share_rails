window.SocialShare = {
  openUrl: function(url, width, height) {
    width = width || 640; // Default width
    height = height || 480; // Default height
    var left = (screen.width / 2) - (width / 2);
    var top = (screen.height * 0.3) - (height / 2);
    var options = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",menubar=no,status=no,location=no";
    window.open(url, "popup", options);
    return false;
  },

  getEncodedAttributes: function(el, site, parent, keys) {
    var result = {};
    keys.forEach(function(key) {
      result[key] = encodeURIComponent(el.getAttribute("data-" + site + "-" + key) || parent.getAttribute("data-" + key) || "");
    });
    return result;
  },

  share: function(el) {
    if (!el.getAttribute) el = document.querySelector(el);

    var site = el.getAttribute("data-site");
    var parent = el.parentNode;
    var attributes = this.getEncodedAttributes(el, site, parent, ["title", "url", "desc"]);
    var title = attributes.title;
    var url = attributes.url;
    var desc = attributes.desc;
    var img = encodeURIComponent(parent.getAttribute("data-img") || "");
    var via = encodeURIComponent(parent.getAttribute("data-via") || "");

    var actions = {
      email: function() {
        location.href = "mailto:?subject=" + title + "&body=" + url;
      },
      twitter: function() {
        var hashtags = encodeURIComponent(el.getAttribute("data-" + site + "-hashtags") || parent.getAttribute("data-hashtags") || "");
        var viaStr = via ? "&via=" + via : "";
        window.SocialShare.openUrl("https://twitter.com/intent/tweet?url=" + url + "&text=" + title + "&hashtags=" + hashtags + viaStr, 650, 300);
      },
      facebook: function() {
        window.SocialShare.openUrl("http://www.facebook.com/sharer/sharer.php?display=page&u=" + url, 555, 400);
      },
      google_bookmark: function() {
        window.SocialShare.openUrl("https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + url + "&title=" + title);
      },
      pinterest: function() {
        window.SocialShare.openUrl("http://www.pinterest.com/pin/create/button/?url=" + url + "&media=" + img + "&description=" + title);
      },
      linkedin: function() {
        window.SocialShare.openUrl("https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title + "&summary=" + desc);
      },
      vkontakte: function() {
        window.SocialShare.openUrl("http://vk.com/share.php?url=" + url + "&title=" + title + "&image=" + img);
      },
      reddit: function() {
        window.SocialShare.openUrl("http://www.reddit.com/submit?url=" + url + "&title=" + title + "&newwindow=1", 555, 400);
      },
      telegram: function() {
        window.SocialShare.openUrl("https://telegram.me/share/url?text=" + title + "&url=" + url);
      },
      whatsapp_app: function() {
        window.open("whatsapp://send?text=" + title + "%0A" + url, "_top");
      },
      whatsapp_web: function() {
        window.SocialShare.openUrl("https://web.whatsapp.com/send?text=" + title + "%0A" + url);
      }
    };

    if (actions[site]) {
      actions[site]();
    }
    return false;
  }
};
