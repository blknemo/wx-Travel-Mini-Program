const app = getApp()

Page({
  data: {
    modules:[
      {name:"周边游",icon:"/public/imgs/around.png",bg:"bg-gradual-red",url:"/pages/products/products"},
      {name:"国内游",icon:"/public/imgs/national.png",bg:"bg-gradual-orange",url:"/pages/products/products"},
      {name:"出境游",icon:"/public/imgs/outbound.png",bg:"bg-gradual-green",url:"/pages/products/products"},
      {name:"团建亲子",icon:"/public/imgs/special.png",bg:"bg-gradual-blue",url:"/pages/sp_products/sp_products"},
      {name:"特价游",icon:"/public/imgs/special.png",bg:"bg-gradual-blue",url:"/pages/sp_products/sp_products"},
      {name:"旅游杂谈",icon:"/public/imgs/note.png",bg:"bg-gradual-purple",url:"/pages/travel_notes/travel_notes"}
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
    ]
  },

  onLoad: function () {
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
