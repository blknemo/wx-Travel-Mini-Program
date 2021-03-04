
Page({

  data: {
    adult_num:1,
    child_num:1,
    little_child_num:1,
    adult_price:1200,
    child_price:1000,
    little_child_price:800,
    calendarConfig: {
      // 配置内置主题
      theme: 'elegant',
      //高亮显示当天
      highlightToday: true,
      //禁选当天之前的日期
      disablePastDay: true,
      // 单选模式下是否支持取消选中
      inverse: true,
    },
  },

  onLoad: function (options) {
  },

  onReady: function () {
    var earliestDate = wx.getStorageSync("earliestDate");
    var latestDate = wx.getStorageSync("latestDate");
    console.log(earliestDate);
    console.log(latestDate);

    this.calendar.enableArea([earliestDate, latestDate]);

    // 价格
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

  to_fill_info(){
    wx.navigateTo({
      url: '/pages/linkman_select/linkman_select',
    })
  },

  afterTapDay(e) {
    console.log(e.detail);
    var startDate = e.detail.year + '-' + e.detail.month + '-' + e.detail.day
    wx.setStorageSync('startDate', startDate)
    console.log(startDate);

  },
  afterCalendarRender(e) {
    console.log(e.detail);
    
  }

})