const app = getApp();

Page({

  data: {
    TabCur:0,
    scrollLeft:0,
    // menus:["全部","待付款","待接单","待出行","已出行","退款单"],
    menus:["全部","待付款","待接单","待出行","已出行","退款中","已退款","已取消"],
    // orders:[
    //   {
    //     "avatar":"/public/imgs/test.jpg",
    //     "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
    //     "provider":"趣旅旅行",
    //     "destination":"三亚",
    //     "days":"6天5晚",
    //     "traffic":"动车往返",
    //     "price":"3200",
    //     "score":"10.0",
    //     "sold_out_num":"321",
    //     "properties":["无自费","无购物","铁定出行"],
    //     "start_address":"武汉",
    //     "start_time":"10-1",
    //     "is_full":false,
    //     "through_address":["南昌","武汉","成都"],
    //     "state":"待付款",
    //     "state_id":1,
    //     "take_order_time":"2020-01-20 18:05"
    //   },
    //   {
    //     "avatar":"/public/imgs/test.jpg",
    //     "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
    //     "provider":"趣旅旅行",
    //     "destination":"三亚",
    //     "days":"6天5晚",
    //     "traffic":"动车往返",
    //     "price":"3200",
    //     "score":"10.0",
    //     "sold_out_num":"321",
    //     "properties":["无自费","无购物","铁定出行"],
    //     "start_address":"武汉",
    //     "start_time":"10-1",
    //     "is_full":false,
    //     "through_address":["南昌","武汉","成都"],
    //     "state":"待接单",
    //     "state_id":2,
    //     "take_order_time":"2020-01-20 18:05"
    //   },
    //   {
    //     "avatar":"/public/imgs/test.jpg",
    //     "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
    //     "provider":"趣旅旅行",
    //     "destination":"三亚",
    //     "days":"6天5晚",
    //     "traffic":"动车往返",
    //     "price":"3200",
    //     "score":"10.0",
    //     "sold_out_num":"321",
    //     "properties":["无自费","无购物","铁定出行"],
    //     "start_address":"武汉",
    //     "start_time":"10-1",
    //     "is_full":true,
    //     "through_address":["南昌","武汉","成都","北京"],
    //     "state":"待出行",
    //     "state_id":3,
    //     "take_order_time":"2020-01-20 18:05"
    //   },
    //   {
    //     "avatar":"/public/imgs/test.jpg",
    //     "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
    //     "provider":"趣旅旅行",
    //     "destination":"三亚",
    //     "days":"6天5晚",
    //     "traffic":"动车往返",
    //     "price":"3200",
    //     "score":"10.0",
    //     "sold_out_num":"321",
    //     "properties":["无自费","无购物","铁定出行"],
    //     "start_address":"武汉",
    //     "start_time":"10-1",
    //     "is_full":false,
    //     "through_address":["南昌","武汉","成都"],
    //     "state":"已出行",
    //     "state_id":4,
    //     "take_order_time":"2020-01-20 18:05"
    //   },
    //   {
    //     "avatar":"/public/imgs/test.jpg",
    //     "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
    //     "provider":"趣旅旅行",
    //     "destination":"三亚",
    //     "days":"6天5晚",
    //     "traffic":"动车往返",
    //     "price":"3200",
    //     "score":"10.0",
    //     "sold_out_num":"321",
    //     "properties":["无自费","无购物","铁定出行"],
    //     "start_address":"武汉",
    //     "start_time":"10-1",
    //     "is_full":false,
    //     "through_address":["南昌","武汉","成都"],
    //     "state":"退款中",
    //     "state_id":5,
    //     "take_order_time":"2020-01-20 18:05"
    //   },
    //   {
    //     "avatar":"/public/imgs/test.jpg",
    //     "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
    //     "provider":"趣旅旅行",
    //     "destination":"三亚",
    //     "days":"6天5晚",
    //     "traffic":"动车往返",
    //     "price":"3200",
    //     "score":"10.0",
    //     "sold_out_num":"321",
    //     "properties":["无自费","无购物","铁定出行"],
    //     "start_address":"武汉",
    //     "start_time":"10-1",
    //     "is_full":false,
    //     "through_address":["南昌","武汉","成都"],
    //     "state":"已取消",
    //     "state_id":6,
    //     "take_order_time":"2020-01-20 18:05"
    //   },
    //   {
    //     "avatar":"/public/imgs/test.jpg",
    //     "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
    //     "provider":"趣旅旅行",
    //     "destination":"三亚",
    //     "days":"6天5晚",
    //     "traffic":"动车往返",
    //     "price":"3200",
    //     "score":"10.0",
    //     "sold_out_num":"321",
    //     "properties":["无自费","无购物","铁定出行"],
    //     "start_address":"武汉",
    //     "start_time":"10-1",
    //     "is_full":false,
    //     "through_address":["南昌","武汉","成都"],
    //     "state":"申诉中",
    //     "state_id":7,
    //     "take_order_time":"2020-01-20 18:05"
    //   },

    // ],
  },

  onLoad: function (options) {
    var that = this;
    console.log("订单！！！！！！！！！！！！！！！！！");
    console.log(options);
    if(options != null && options.tab_index) {
      this.setData({
        TabCur:options.tab_index,
        option: options
      })
    }

    console.log("openId!!!!!!!!!!!!!!!");
    console.log(app.globalData.openid)
    wx.request({
      url: 'http://localhost:8082/orders/orders/' + app.globalData.openid + '?state=' + that.data.TabCur,
      // url: 'http://localhost:8082/orders/orders/222' + '?state=' + that.data.TabCur,
      method: 'GET',
      success(res) {
        // console.log(res.data.data.records);
        console.log(res.data.data);
        that.setData({
          // orders: res.data.data.records
          orders: res.data.data
        })
      }
    })

  },

  onShow(options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8082/orders/orders/' + app.globalData.openid + '?state=' + that.data.TabCur,
      // url: 'http://localhost:8082/orders/orders/222' + '?state=' + that.data.TabCur,
      method: 'GET',
      success(res) {
        // console.log(res.data.data.records);
        console.log(res.data.data);
        that.setData({
          // orders: res.data.data.records
          orders: res.data.data
        })
      }
    })
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    this.onLoad(this.data.options);
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
  },















  /**
   * 好友助力
   * @param {} e 
   */
  helpOrder(e) {
    // 得到订单id
    console.log(e.currentTarget.dataset.id);

    wx.navigateTo({
      url: '/pages/help/help?orderId=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 删除订单
   * @param {*} e 
   */
  delOrder(e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8082/orders/order/' + e.currentTarget.dataset.id,
      method: 'DELETE',
      success() {
        that.onLoad(that.data.options);
      }
    })
  },

  /**
   * 退款，订单状态：1待付款，2待接单，3待出行，4已出行，5退款中，6已退款，7已取消
   * @param {*} e 
   */
  refundOrder(e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8082/orders/order/' + e.currentTarget.dataset.id + '/5',
      method: 'PUT',
      success() {
        that.onLoad(that.data.options);
      }
    })
  },

  /**
   * 取消订单，订单状态：1待付款，2待接单，3待出行，4已出行，5退款中，6已退款，7已取消
   * @param {*} e 
   */
  cancelOrder(e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8082/orders/order/' + e.currentTarget.dataset.id + '/7',
      method: 'PUT',
      success() {
        that.onLoad(that.data.options);
      }
    })
  },

  toOrderInfo(e) {
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/order_info/order_info?id=' + e.currentTarget.dataset.id
    })
  },

  pay(e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8082/orders/order/' + e.currentTarget.dataset.id + '/2',
      method: 'PUT',
      success() {
        that.onLoad(that.data.options);
      }
    })
  }
  
})