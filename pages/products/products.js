const app = getApp();

Page({
  data: {
    key_word: "搜索目的地",
    departure: "选择出发日期",
    handle_calendr: "暂不选择",
    cur_condition_index: 0,
    pageInfo: {
      pageNum: 1,
      pageSize: 5
    },
    sorts: [{
        label: "综合排序",
        value: "rec"
      },
      {
        label: "销量高到低",
        value: "rec"
      },
      {
        label: "价格低到高",
        value: "rec"
      },
      {
        label: "价格高到低",
        value: "rec"
      },
      {
        label: "评分高到低",
        value: "rec"
      },
    ],
    securitys: ["无自费", "无购物", "铁定出行", "即时确认"],
    traffics: ["直飞往返", "动车/火车", "巴士", "邮轮"],
    days: ["1天", "2天", "3天", "4天", "5天", "6天", "7天", "8天及以上"],
    other_conditions: ["直飞往返", "动车/火车", "巴士", "无购物", "无自费", "铁定出行"],
    products: [],
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
  showModal(e) {
    var index = 0
    if (e.currentTarget.dataset.index) {
      index = e.currentTarget.dataset.index
    }
    this.setData({
      cur_condition_index: index,
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  viewDetail:function(event){
    var id = event.currentTarget.dataset.productid
    wx.navigateTo({
      url: '/pages/product_detail/product_detail?id='+id,
    })
  },

  onLoad: function (options) {
    console.log(options)
    var that = this
    wx.request({
      url: 'http://localhost:8082/goods/list',
      method: 'POST',
      header:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        pageNum: that.data.pageInfo.pageNum,
        pageSize: that.data.pageInfo.pageSize,
        type: options.type
      },
      success: res=>{
        console.log(res.data.data.records)
        that.setData({
          products:res.data.data.records,
        })
      }
    })
  },
  onShow: function () {

  },
  onReady: function () {
    this.calendar.enableArea(['2020-4-02', '2020-8-30']);
  },

})