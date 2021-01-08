
Page({

  data: {
    tabList:["我的收藏","我的足迹"],
    TabCur: 0,
    scrollLeft:0,
    collections:[
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "price":"3200",
        "type":"1"
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"印象丽江+洱海大邮轮+玉龙雪山",
        "city":"武汉",
        "type":"2",
      },
    ],
    view_historys:[
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "price":"3200",
        "type":"1"
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"印象丽江+洱海大邮轮+玉龙雪山",
        "city":"武汉",
        "type":"2",
      },
    ]
  },

  onLoad: function (options) {
    this.setData({TabCur:options.type})
  },

  onShow: function () {

  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  }

})