const app = getApp();

Page({

  data: {
    msgs: [{
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider": "趣旅旅行",
        "destination": "三亚",
        "days": "6天5晚",
        "traffic": "动车往返",
        "price": "3200",
        "start_address": "武汉",
        "start_time": "10-01 08:00",
        "is_full": false,
        "state_id": 3,
        "take_order_time": "2020-01-20 18:05",
      },
      {
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider": "趣旅旅行",
        "destination": "三亚",
        "days": "6天5晚",
        "traffic": "动车往返",
        "price": "3200",
        "start_address": "武汉",
        "start_time": "10-01 08:00",
        "is_full": false,
        "state_id": 3,
        "take_order_time": "2020-01-20 18:05",
      },
      {
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider": "趣旅旅行",
        "destination": "三亚",
        "days": "6天5晚",
        "traffic": "动车往返",
        "price": "3200",
        "start_address": "武汉",
        "start_time": "10-01 08:00",
        "is_full": false,
        "state_id": 3,
        "take_order_time": "2020-01-20 18:05",
      }
    ]
  },

  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://localhost:8082/orders/notice/list',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: app.globalData.openid,
      },
      success: res => {
        console.log(res)
        that.setData({
          msgs: res.data
        })
      }
    })
  },

  onShow: function () {

  },
})