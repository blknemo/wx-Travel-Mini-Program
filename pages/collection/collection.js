const app = getApp()

Page({

  data: {
    tabList: ["我的收藏", "我的足迹"],
    TabCur: 0,
    scrollLeft: 0,
    collectionPage: {
      pageNum: 1,
      pageSize: 5
    },
    historyPage: {
      pageNum: 1,
      pageSize: 5
    },
    collections: [],
    historys: [],
    view_historys: [{
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "price": "3200",
        "type": "1"
      },
      {
        "avatar": "/public/imgs/test.jpg",
        "title": "印象丽江+洱海大邮轮+玉龙雪山",
        "city": "武汉",
        "type": "2",
      },
    ]
  },

  onLoad: function (options) {
    this.setData({
      TabCur: options.type
    })
    this.getCollection(),
      this.getHistory()
  },

  onShow: function () {},
  getCollection(e) {
    var that = this
    wx.request({
      url: 'http://localhost:8082/collection/list',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: app.globalData.openid,
        pageNum: that.data.collectionPage.pageNum,
        pageSize: that.data.collectionPage.pageSize
      },
      success: res => {
        console.log(res.data.data.records)
        that.setData({
          collections: res.data.data.records
        })
      }
    })
  },
  getHistory(e) {
    var that = this
    wx.request({
      url: 'http://localhost:8082/history/list',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: app.globalData.openid,
        pageNum: that.data.historyPage.pageNum,
        pageSize: that.data.historyPage.pageSize
      },
      success: res => {
        console.log(res.data.data)
        that.setData({
          historys: res.data.data.records
        })
      }
    })
  },
  deleteHistory(e){
    var that = this
    console.log("delete")
    wx.request({
      url: 'http://localhost:8082/history/delete',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        userId: app.globalData.openid,
      },
      success: res => {
        console.log("删除成功")
        that.setData({
          historys: []
        })
      }
    })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }

})