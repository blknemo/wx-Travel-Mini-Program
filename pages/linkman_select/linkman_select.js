const app = getApp();

Page({

  data: {
    pro_detail:{
      avatar:"/public/imgs/test.jpg",
      title:"坐游船赏三峡、双船双动、神农架、两坝一峡、三峡大坝三日游、无自费无购物",
      start_time:"2020-04-20",
      start_city:"武汉",
      trip_days:"6天5晚"
    },
    adult_num:1,
    child_num:1,
    little_child_num:1,
    adult_price:1200,
    child_price:1000,
    little_child_price:800,
    modalName:null

  },

  onLoad: function (options) {
    
  },

  onShow: function (options) {
    var that = this
    var linkMan = wx.getStorageSync('linkMan')
    var passenger = wx.getStorageSync('passenger')
    console.log("select页面");
    console.log(linkMan);
    that.setData({
      linkMan: linkMan,
      passenger: passenger
    })


    var adultPrice = wx.getStorageSync('adultPrice');
    var childPrice = wx.getStorageSync('childPrice');
    var otherExpense = wx.getStorageSync('otherExpense')

    this.setData({
      adultPrice,
      childPrice,
      otherExpense
    })

  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  toLinkManSelect() {
    wx.navigateTo({
      url: '/pages/linkman_choose/linkman_choose?cur_tab=1',
    })
  },

  toPassengerSelect() {
    wx.redirectTo({
      url: '/pages/linkman_choose/linkman_choose?cur_tab=2',
    })
  },

  handleChildNumInput(e) {
    console.log(e.detail.value);
    this.setData({
      childNum: e.detail.value
    })
  },

  handleAdultNumInput(e) {
    console.log(e.detail.value);
    this.setData({
      adultNum: e.detail.value
    })
  },

  submit() {
    
    var that = this;



    var totalPrice = that.data.adultNum * wx.getStorageSync('adultPrice') + that.data.childNum * wx.getStorageSync('childPrice') + wx.getStorageSync('otherExpense')

    that.setData({
      order: {
        adultSum: that.data.adultNum,
        childSum: that.data.childNum,
        contactId: that.data.linkMan.id,
        startDate: wx.getStorageSync('startDate'),
        state: 1, // 待付款
        totalPrice: totalPrice
      }
    })

    console.log(that.data.order);
    // console.log(app.globalData.openid);
    // console.log(wx.getStorageSync('goodsId'));
    // console.log(wx.getStorageSync('supplierId'));


    wx.request({
      url: 'http://localhost:8082/orders/order/' + app.globalData.openid +'/' + wx.getStorageSync('goodsId') + '/' + wx.getStorageSync('supplierId'),
      method: 'POST',
      data: that.data.order,
      success() {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    })

    
  }

})