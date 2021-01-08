
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
    this.calendar.enableArea(['2020-4-02', '2020-8-30']);
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
  }

})