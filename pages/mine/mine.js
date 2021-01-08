
Page({

  data: {
    iconList: [{
      icon: 'card ',
      color: 'red',
      badge: 0,
      name: '常用信息',
      url:"/pages/link_info/link_info"
    }, {
      icon: 'discoverfill',
      color: 'orange',
      badge: 0,
      name: '我的杂谈',
      url:"/pages/my_travel_notes/my_travel_notes"
    }, {
      icon: 'appreciatefill',
      color: 'yellow',
      badge: 0,
      name: '我的点评',
      url:"/pages/my_evas/my_evas"
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '行程通知',
      url:"/pages/notice_msg/notice_msg"
    }, {
      icon: 'moneybagfill',
      color: 'mauve',
      badge: 0,
      name: '我的收入',
      url:"/pages/my_income/my_income"
    }, {
      icon: 'formfill',
      color: 'cyan',
      badge: 0,
      name: '合同发票',
      url:"/pages/invoice/invoice"
    }, {
      icon: 'writefill ',
      color: 'blue',
      badge: 0,
      name: '意见反馈',
      url:"/pages/advice/advice"
    }, {
      icon: 'servicefill',
      color: 'purple',
      badge: 0,
      name: '联系客服'
    }, ],
    gridCol:4,
  },

  onLoad: function (options) {

  },
  onShow: function () {

  },
  toRec(){
    wx.navigateTo({
      url: '/pages/rec/rec',
    })
  },
  toLinkInfo(){
    wx.navigateTo({
      url: '/pages/link_info/link_info',
    })
  },
  toOrderSort(e){
    var tab_index = e.currentTarget.dataset.hi
    wx.navigateTo({
      url: '/pages/orders/orders?tab_index=' + tab_index,
    })
  },
  toCollection(e){
    var type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/collection/collection?type=' + type ,
    })
  },
  toVip(){
    wx.navigateTo({
      url: '/pages/vip_member/vip_member',
    })
  },
  handleJump(e){
    var url = e.currentTarget.dataset.url
    if(url)
      wx.navigateTo({
        url: url,
      })
    else
      wx.setClipboardData({
        data: '13476818230',
        success:res=>{
          wx.showToast({
            title: '客服电话已复制',
            icon:"none"
          })
        }
      })
  }
 
})