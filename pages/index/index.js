const app = getApp()

Page({
  data: {
    modules:[
      {name:"周边游",icon:"/public/imgs/around.png",bg:"bg-gradual-red",url:"/pages/products/products?type=1"},
      {name:"国内游",icon:"/public/imgs/national.png",bg:"bg-gradual-orange",url:"/pages/products/products?type=2"},
      {name:"出境游",icon:"/public/imgs/outbound.png",bg:"bg-gradual-green",url:"/pages/products/products?type=3"}
    ],
    features:[
      "方便快捷-准确快速获取行程。",
      "高额保险-50万旅游意外险（3元/天/人），平台自动代买。",
      "价格透明-收取服务费（25元/天/人）。",
      "确保游客权益-回程3天后，团款支付给供应商。如有投诉，退还相应团款，直至全额返回。",
      "自由赚钱-通过你发送的链接，第一次进入小程序的游客，成为你的永久会员，每次旅游的服务费的80%（20元/天/人）归你。"
    ],
    spots:[
      {name:"方便快捷",content:"准确快速获取行程"},
      {name:"价格透明",content:"成本+服务费（35天/人，包含3元保险）"},
      {name:"高额保险",content:"50万旅游意外险（3元/天/人），平台自动代买"},
      {name:"轻松营销",content:"朋友们通过你发送的链接进入小程序，即成为你的永久会员"},
      {name:"确保权益",content:"回程3天后，团款支付给供应商。如有投诉，退还相应团款，直至全额返回"},
      {name:"省钱赚钱",content:"会员报团的利润，20元的利润归你；会员的下级会员报团，5元利润归你"}
    ],
    datas: []
  },
  viewDetail:function(event){
    var id = event.currentTarget.dataset.id
    console.log(event.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/product_detail/product_detail?id='+id,
    })
  },

  onLoad: function () {
    var that = this;
        wx.getUserInfo({
            success: function(res) {
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
                                }),

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
                                        id: app.globalData.openid
                                    }
                                });
                                
                            }
                        });
                    }
                });
            }
        });
        wx.request({
          url: 'http://localhost:8082/goods/hot',
          method:'GET',
          success: res=>{
            console.log(res)
            that.setData({
              datas:res.data.data,
            })
          }
        })
        
  },
  
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      console.log(ops.target)
    }
    return {
      title: '报团旅游小程序',
      path: 'pages/index/index',  // 路径，传递参数到指定页面。
      imageUrl:'', // 分享的封面图
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
 
  }
})
