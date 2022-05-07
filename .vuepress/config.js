let ogprefix = 'og: http://ogp.me/ns#'
let title = 'CYB Note'
let description = 'Tech | Code | Travel x Notes'
let author = 'CYB'

module.exports = {
  title: title,
  description: description,
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    // ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    // ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://cyb.tw' }],
    // ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    // ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://cyb.tw/bg.jpg' }],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
    ['meta', { prefix: ogprefix, property: 'og:article:author', content: author }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  theme: 'reco',
  themeConfig: {
    noFoundPageByTencent: false,
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'AboutMe',
        icon: 'reco-message',
        items: [
          { text: 'Info', link: '/docs/aboutme/', icon: 'reco-account' },
          { text: 'GitHub', link: 'https://github.com/ChadCYB', icon: 'reco-github' }
        ]
      },
    ],
    sidebar: {
      '/docs/aboutme/': [
        '',
        'projects',
        'publications',
        'vuepress'
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2,
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag'
      },
      socialLinks: [
        { icon: 'reco-home', link: 'https://cyb.tw' },
        // { icon: 'reco-mail', link: 'mailto:cyb@cyb.tw' },
        { icon: 'reco-github', link: 'https://github.com/ChadCYB' },
        { icon: 'reco-linkedin', link: 'https://www.linkedin.com/in/cyb/' },
      ]
    },
    friendLink: [
      {
        title: "JackKuo's Blog",
        desc: 'Tech | OpenSource | Altruism',
        logo: "https://jackkuo.org/img/goldcoast.jpg",
        link: 'https://jackkuo.org/'
      },
      {
        title: '飛飛',
        desc: '尋找自己的意義，在資訊圈努力打滾求生存。',
        logo: "https://miro.medium.com/fit/c/680/680/1*mZnNqXcLJsaRkGQ3RcJwOw.jpeg",
        link: 'https://medium.com/@feifei3363'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'CYB',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    // record: 'XXX',
    // 项目开始时间
    startYear: '2017'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    'reading-progress',
    ["disqus", {
      "shortname": "cyb-note"
    }],
    ["@vuepress/google-analytics", {
      'ga': 'UA-84146570-3' // UA-00000000-0
    }],
    ["vuepress-plugin-google-gtag", {
      'ga': 'G-1CV0QVHQND' // GA4
    }],
    ['@vuepress/last-updated', {
      dateOptions:{
        hour12: false
      },
      transformer: timestamp => {
        return new Date(timestamp).toISOString()
      }
    }]
  ]
}  
