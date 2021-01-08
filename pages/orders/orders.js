
Page({

  data: {
    TabCur:0,
    scrollLeft:0,
    menus:["全部","待付款","待接单","待出行","已出行","退款单"],
    orders:[
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "price":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":false,
        "through_address":["南昌","武汉","成都"],
        "state":"待付款",
        "state_id":1,
        "take_order_time":"2020-01-20 18:05"
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "price":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":false,
        "through_address":["南昌","武汉","成都"],
        "state":"待接单",
        "state_id":2,
        "take_order_time":"2020-01-20 18:05"
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "price":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":true,
        "through_address":["南昌","武汉","成都","北京"],
        "state":"待出行",
        "state_id":3,
        "take_order_time":"2020-01-20 18:05"
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "price":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":false,
        "through_address":["南昌","武汉","成都"],
        "state":"已出行",
        "state_id":4,
        "take_order_time":"2020-01-20 18:05"
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "price":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":false,
        "through_address":["南昌","武汉","成都"],
        "state":"退款中",
        "state_id":5,
        "take_order_time":"2020-01-20 18:05"
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "price":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":false,
        "through_address":["南昌","武汉","成都"],
        "state":"已取消",
        "state_id":6,
        "take_order_time":"2020-01-20 18:05"
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "price":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":false,
        "through_address":["南昌","武汉","成都"],
        "state":"申诉中",
        "state_id":7,
        "take_order_time":"2020-01-20 18:05"
      },

    ],
  },

  onLoad: function (options) {
    if(options.tab_index)
      this.setData({TabCur:options.tab_index})
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },

  toInvoice(){
    wx.navigateTo({
      url: '/pages/add_invoice/add_invoice',
    })
  },

  toOrderEva(){
    wx.navigateTo({
      url: '/pages/order_eva/order_eva',
    })
  }

})