const app = getApp();

Page({

  data: {
    userInfo: '',
    collectionNum: 0,
    historyNum: 0,
    iconList: [{
      icon: 'card ',
      color: 'red',
      badge: 0,
      name: '常用信息',
      url: "/pages/link_info/link_info"
    }, 
    {
      icon: 'discoverfill',
      color: 'orange',
      badge: 0,
      name: '我的杂谈',
      url: "/pages/my_travel_notes/my_travel_notes"
    }, 
    {
      icon: 'appreciatefill',
      color: 'yellow',
      badge: 0,
      name: '我的点评',
      url: "/pages/my_evas/my_evas"
    }, 
    {
      icon: 'noticefill',
      color: 'olive',
      badge: 0,
      name: '行程通知',
      url: "/pages/notice_msg/notice_msg"
    }, 
    // {
    //   icon: 'moneybagfill',
    //   color: 'mauve',
    //   badge: 0,
    //   name: '我的收入',
    //   url: "/pages/my_income/my_income"
    // }, {
    //   icon: 'formfill',
    //   color: 'cyan',
    //   badge: 0,
    //   name: '合同发票',
    //   url: "/pages/invoice/invoice"
    // }, {
    //   icon: 'writefill ',
    //   color: 'blue',
    //   badge: 0,
    //   name: '意见反馈',
    //   url: "/pages/advice/advice"
    // }, {
    //   icon: 'servicefill',
    //   color: 'purple',
    //   badge: 0,
    //   name: '联系客服'
    // }, 
  ],
    // gridCol:4,
    gridCol: 2,
  },

  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    });
    console.log("mine：" + this.data.userInfo.nickName);
    console.log("mine：" + app.globalData.userInfo.nickName);
  },
  onShow: function () {
    var that = this
    wx.request({
      url: 'http://localhost:8082/collection/count',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: app.globalData.openid,
      },
      success: res => {
        // console.log(res)
        that.setData({
          collectionNum: res.data
        })
      }
    })
    wx.request({
      url: 'http://localhost:8082/history/count',
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
          historyNum: res.data
        })
      }
    })
    wx.request({
      url: 'http://localhost:8082/orders/notice/count',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: app.globalData.openid,
      },
      success: res => {
        that.setData({
          ['iconList[3].badge']:res.data
        })
      }
    })
  },
  toRec() {
    wx.navigateTo({
      url: '/pages/rec/rec',
    })
  },
  toLinkInfo() {
    wx.navigateTo({
      url: '/pages/link_info/link_info',
    })
  },
  toOrderSort(e) {
    var tab_index = e.currentTarget.dataset.hi
    // wx.navigateTo({
    // 这里不能使用navigateTo是因为我在下面的tabBar标签栏添加了订单助力跳转界面，所以得使用switchTab来进行跳转
    wx.switchTab({
      url: '/pages/orders/orders?tab_index=' + tab_index,
    })
  },
  toCollection(e) {
    var type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/collection/collection?type=' + type,
    })
  },
  toVip() {
    wx.navigateTo({
      url: '/pages/vip_member/vip_member',
    })
  },
  handleJump(e) {
    var url = e.currentTarget.dataset.url
    if (url)
      wx.navigateTo({
        url: url,
      })
    else
      wx.setClipboardData({
        data: '13476818230',
        success: res => {
          wx.showToast({
            title: '客服电话已复制',
            icon: "none"
          })
        }
      })
  }

})