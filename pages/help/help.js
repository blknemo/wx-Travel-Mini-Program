// pages/help/help.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0,
    menus: ["全部", "待付款", "待接单", "待出行", "已出行", "退款单"],
    orders: [{
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider": "趣旅旅行",
        "destination": "三亚",
        "days": "6天5晚",
        "traffic": "动车往返",
        "price": "3200",
        "score": "10.0",
        "sold_out_num": "321",
        "properties": ["无自费", "无购物", "铁定出行"],
        "start_address": "武汉",
        "start_time": "10-1",
        "is_full": false,
        "through_address": ["南昌", "武汉", "成都"],
        "state": "待付款",
        "state_id": 1,
        "take_order_time": "2020-01-20 18:05"
      },
      {
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider": "趣旅旅行",
        "destination": "三亚",
        "days": "6天5晚",
        "traffic": "动车往返",
        "price": "3200",
        "score": "10.0",
        "sold_out_num": "321",
        "properties": ["无自费", "无购物", "铁定出行"],
        "start_address": "武汉",
        "start_time": "10-1",
        "is_full": false,
        "through_address": ["南昌", "武汉", "成都"],
        "state": "待接单",
        "state_id": 2,
        "take_order_time": "2020-01-20 18:05"
      },
      {
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider": "趣旅旅行",
        "destination": "三亚",
        "days": "6天5晚",
        "traffic": "动车往返",
        "price": "3200",
        "score": "10.0",
        "sold_out_num": "321",
        "properties": ["无自费", "无购物", "铁定出行"],
        "start_address": "武汉",
        "start_time": "10-1",
        "is_full": true,
        "through_address": ["南昌", "武汉", "成都", "北京"],
        "state": "待出行",
        "state_id": 3,
        "take_order_time": "2020-01-20 18:05"
      },
      {
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider": "趣旅旅行",
        "destination": "三亚",
        "days": "6天5晚",
        "traffic": "动车往返",
        "price": "3200",
        "score": "10.0",
        "sold_out_num": "321",
        "properties": ["无自费", "无购物", "铁定出行"],
        "start_address": "武汉",
        "start_time": "10-1",
        "is_full": false,
        "through_address": ["南昌", "武汉", "成都"],
        "state": "已出行",
        "state_id": 4,
        "take_order_time": "2020-01-20 18:05"
      },
      {
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider": "趣旅旅行",
        "destination": "三亚",
        "days": "6天5晚",
        "traffic": "动车往返",
        "price": "3200",
        "score": "10.0",
        "sold_out_num": "321",
        "properties": ["无自费", "无购物", "铁定出行"],
        "start_address": "武汉",
        "start_time": "10-1",
        "is_full": false,
        "through_address": ["南昌", "武汉", "成都"],
        "state": "退款中",
        "state_id": 5,
        "take_order_time": "2020-01-20 18:05"
      },
      {
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider": "趣旅旅行",
        "destination": "三亚",
        "days": "6天5晚",
        "traffic": "动车往返",
        "price": "3200",
        "score": "10.0",
        "sold_out_num": "321",
        "properties": ["无自费", "无购物", "铁定出行"],
        "start_address": "武汉",
        "start_time": "10-1",
        "is_full": false,
        "through_address": ["南昌", "武汉", "成都"],
        "state": "已取消",
        "state_id": 6,
        "take_order_time": "2020-01-20 18:05"
      },
      {
        "avatar": "/public/imgs/test.jpg",
        "title": "三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider": "趣旅旅行",
        "destination": "三亚",
        "days": "6天5晚",
        "traffic": "动车往返",
        "price": "3200",
        "score": "10.0",
        "sold_out_num": "321",
        "properties": ["无自费", "无购物", "铁定出行"],
        "start_address": "武汉",
        "start_time": "10-1",
        "is_full": false,
        "through_address": ["南昌", "武汉", "成都"],
        "state": "申诉中",
        "state_id": 7,
        "take_order_time": "2020-01-20 18:05"
      },

    ],
    linkManList: [
      {
        id: 1,
        name: "阿甘1",
        mobile: "13476818222",
        is_init: true
      },
      {
        id: 1,
        name: "阿甘1",
        mobile: "13476818222",
        is_init: true
      },
      {
        id: 1,
        name: "阿甘1",
        mobile: "13476818222",
        is_init: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
        // 根据自己的需求有其他操作再补充
        // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
        console.log(res.userInfo);
        that.setData({
          userInfo: res.userInfo
        });
        app.globalData.userInfo = res.userInfo;
        wx.login({
          success: res => {
            // 获取到用户的 code 之后：res.code
            console.log("用户的code:" + res.code);
            // 可以传给后台，再经过解析获取用户的 openid
            // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
            wx.request({
              // 自行补上自己的 APPID 和 SECRET
              // GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxd947db7bfd81dbc1&secret=e32ca2bfb5d6eb7da1b2d92d48f34c56&js_code=' + res.code + '&grant_type=authorization_code',
              method: 'GET',
              success: res => {
                // 获取到用户的 openid
                console.log("用户的openid:" + res.data.openid);

                // 如果不是很明白这里为什么用that
                // https://blog.csdn.net/weixin_46363283/article/details/106690558
                // that.setData({
                //     openid: res.data.openid
                // });
                app.globalData.openid = res.data.openid;
                console.log(app.globalData.openid);
                that.setData({
                  openid: app.globalData.openid
                });

                /**这里的request我本来是放在外面的，可是不行，
                 * 我本以为上面的request会依次执行下面的语句，包括success，可是不是这样的；
                 * 经过测试，我发现在上一个request成功返回openid之前，这条request就已经执行了，
                 * 说明上一条request是异步的，请求完之后就不管了，
                 * 接着执行下面的语句，等请求成功之后才执行success */
                wx.request({
                  // url: 'http://localhost:8080/test/loginDemo',
                  url: 'http://localhost:8082/user/user',
                  method: 'POST',
                  // header: {
                  //   'content-type': 'application/x-www-form-urlencoded'
                  // },
                  data: {
                    id: app.globalData.openid,
                    name: app.globalData.userInfo.nickName,
                    iconUrl: app.globalData.userInfo.avatarUrl
                  },
                  /*
                  success() {
                    // 登录成功之后填写登录日志记录表login_log
                    //os, browser, system
                    wx.getSystemInfo({
                      success: (result) => {
                        app.globalData.loginInfo.os = result.system;
                        app.globalData.loginInfo.browser = '微信小程序';
                        app.globalData.loginInfo.system = '微信小程序客户端';
                      },
                    });
                    // ip
                    wx.request({
                      url: 'http://ip-api.com/json',
                      method: 'GET',
                      success(res) {
                        app.globalData.loginInfo.userId = app.globalData.openid;
                        app.globalData.loginInfo.ip = res.data.query;
                        app.globalData.loginInfo.city = res.data.city;
                        console.log(app.globalData.loginInfo.ip);
                        console.log(app.globalData.loginInfo);
                        wx.request({
                          url: 'http://localhost:8082/user/loginlog',
                          method: 'POST',
                          data: {
                            // loginLog: app.globalData.loginInfo
                            userId: app.globalData.loginInfo.userId,
                            ip: app.globalData.loginInfo.ip,
                            os: app.globalData.loginInfo.os,
                            browser: app.globalData.loginInfo.browser,
                            system: app.globalData.loginInfo.system,
                            city: app.globalData.loginInfo.city
                          }
                        })
                      }
                    });
                  }
                  */
                });
              }
            });
          }
        });
      }
    });

    that.setData({
      options: options
    })

    console.log(options.orderId);
    wx.request({
      url: 'http://localhost:8082/orders/order/' + options.orderId,
      method: 'GET',
      success(res) {
        console.log(res.data.data);
        that.setData({
          order: res.data.data,
          allDiscount: res.data.data.discount,
          helpNum: res.data.data.helpNum
        })
        console.log(that.data.allDiscount);

        // 通过订单id获取助力的用户及其折扣
        wx.request({
          // url: 'http://localhost:8082/help/help/' + options.orderId,
          url: 'http://localhost:8082/help/help/7',
          method: 'GET',
          success(res) {
            console.log(res.data.data);
            that.setData({
              helpMan: res.data.data
            })
          }
        })

        // 通过用户id获取用户信息
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    console.log(e);

    return {
      // 这里可以把订单id传进去，再在用户加载的时候拿出来保存
      // path: '/pages/help/help?orderId=' + orderId
      path: '/pages/help/help?orderId=' + '1'
    }
  },



  handleHelp(e) {
    var that = this;
    wx.request({
      // url: 'http://localhost:8082/help/help/' + orderId + app.globalData.openid + '/',
      url: 'http://localhost:8082/help/help/' + that.data.options.orderId + '/' + app.globalData.openid,
      method: 'POST',
      success(res) {
        // 显示助力金额
        console.log(res);
        console.log(res.data.data);
        that.setData({
          message: res.data.message
        })
        console.log(that.data.discount);

        // 重新显示
        that.onLoad(that.data.options);
      }
    })
  }
})