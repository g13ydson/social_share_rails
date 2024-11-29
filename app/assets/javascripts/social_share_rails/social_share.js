window.SocialShare = {
  openUrl: function(url, width = 640, height = 480) {
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height * 0.3) - (height / 2);
    const options = `width=${width},height=${height},left=${left},top=${top},menubar=no,status=no,location=no`;
    window.open(url, 'popup', options);
    return false;
  },

  getEncodedAttributes: function(el, site, parent, keys) {
    const result = {};
    keys.forEach(key => {
      result[key] = encodeURIComponent(el.getAttribute(`data-${site}-${key}`) || parent.getAttribute(`data-${key}`) || '');
    });
    return result;
  },

  trackEvent: function(site) {
    const ga = window[window['GoogleAnalyticsObject'] || 'ga'];
    if (typeof ga === 'function') {
      ga('send', 'event', 'Social Share Button', 'click', site);
    }
  },

  share: function(el) {
    if (!el.getAttribute) el = document.querySelector(el);

    const site = el.getAttribute("data-site");
    const parent = el.parentNode;
    const { title, url, desc } = this.getEncodedAttributes(el, site, parent, ['title', 'url', 'desc']);
    const img = encodeURIComponent(parent.getAttribute("data-img") || '');
    const via = encodeURIComponent(parent.getAttribute("data-via") || '');

    this.trackEvent(site);

    const actions = {
      email: () => location.href = `mailto:?subject=${title}&body=${url}`,
      twitter: () => {
        const hashtags = encodeURIComponent(el.getAttribute(`data-${site}-hashtags`) || parent.getAttribute('data-hashtags') || '');
        const viaStr = via ? `&via=${via}` : '';
        this.openUrl(`https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=${hashtags}${viaStr}`, 650, 300);
      },
      facebook: () => this.openUrl(`http://www.facebook.com/sharer/sharer.php?u=${url}`, 555, 400),
      google_bookmark: () => this.openUrl(`https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=${url}&title=${title}`),
      pinterest: () => this.openUrl(`http://www.pinterest.com/pin/create/button/?url=${url}&media=${img}&description=${title}`),
      linkedin: () => this.openUrl(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${desc}`),
      vkontakte: () => this.openUrl(`http://vk.com/share.php?url=${url}&title=${title}&image=${img}`),
      reddit: () => this.openUrl(`http://www.reddit.com/submit?url=${url}&title=${title}&newwindow=1`, 555, 400),
      telegram: () => this.openUrl(`https://telegram.me/share/url?text=${title}&url=${url}`),
      whatsapp_app: () => window.open(`whatsapp://send?text=${title}%0A${url}`, '_top'),
      whatsapp_web: () => this.openUrl(`https://web.whatsapp.com/send?text=${title}%0A${url}`)
    };

    if (actions[site]) actions[site]();
    return false;
  }
};
