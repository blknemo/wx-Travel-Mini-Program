const app = getApp()
Page({
  data: {
    cur_img_index: 0,
    cur_tab_index: 0,
    cur_condition_index: 0,
    tab_cons: ["产品特色", "行程安排", "费用说明", "注意事项", "违约责任", "特别提示"],
    TabCur: 0,
    details: {
      pro_number: "210041446",
      imgs: ["/public/imgs/test.jpg", "/public/imgs/test.jpg", "/public/imgs/test.jpg"],
      title: "坐游船赏三峡、双船双动、神农架、两坝一峡、三峡大坝三日游、无自费无购物",
      adult_salary: "2130",
      kidult_salary: "1840",
      kid_salary: "1460",
      sold_out_number: "210",
      collected: false,
      securities: [{
          name: "无购物",
          des: "无购物特色服务是指甲方承认该商品的信息真实有效，一旦网上预订并付款后，行程中无购物店。"
        },
        {
          name: "无自费",
          des: "无自费是指甲方承认该商品的信息真实有效，一旦网上预订并付款后，不得增加强制自费项目"
        },
        {
          name: "即时确认",
          des: "即时确认是指甲方承认该商品的信息真实有效，一旦网上预订并付款后，商家会立即打电话确认核对出游信息"
        },
      ],
      last_days: [{
          day: "04-04",
          week: "周六",
          adult_price: "903"
        },
        {
          day: "04-05",
          week: "周日",
          adult_price: "903"
        },
        {
          day: "04-06",
          week: "周一",
          adult_price: "903"
        },
        {
          day: "04-07",
          week: "周二",
          adult_price: "903"
        },
        {
          day: "04-08",
          week: "周三",
          adult_price: "903"
        },
        {
          day: "04-09",
          week: "周四",
          adult_price: "903"
        },
        {
          day: "04-10",
          week: "周五",
          adult_price: "903"
        },
        {
          day: "04-11",
          week: "周六",
          adult_price: "903"
        }
      ],
      score: "9.6",
      days: [{
          day: "第一天",
          title: "张家界武陵源",
          scenic_spot: "云天渡-玻璃桥张家界大峡谷",
          stay: "张家界碧桂园紫金花舍酒店丶张家界碧桂园云梦院，锦绣东都丶湘瑞阁等",
          breakfast: "自理",
          lunch: "包含",
          dinner: "包含",
          swing: "入住酒店后自由活动，您也可以自费观看大型少数民族表演秀--《魅力湘西》，与湘西文化零距离接触，感受魅力风情"
        },
        {
          day: "第二天",
          title: "张家界武陵源",
          scenic_spot: "云天渡-玻璃桥张家界大峡谷",
          stay: "张家界碧桂园紫金花舍酒店丶张家界碧桂园云梦院，锦绣东都丶湘瑞阁等",
          breakfast: "自理",
          lunch: "包含",
          dinner: "包含",
          swing: "入住酒店后自由活动，您也可以自费观看大型少数民族表演秀--《魅力湘西》，与湘西文化零距离接触，感受魅力风情"
        },
        {
          day: "第三天",
          title: "张家界武陵源",
          scenic_spot: "云天渡-玻璃桥张家界大峡谷",
          stay: "张家界碧桂园紫金花舍酒店丶张家界碧桂园云梦院，锦绣东都丶湘瑞阁等",
          breakfast: "自理",
          lunch: "包含",
          dinner: "包含",
          swing: "入住酒店后自由活动，您也可以自费观看大型少数民族表演秀--《魅力湘西》，与湘西文化零距离接触，感受魅力风情"
        }
      ]
    },
    detail: {},
  },

  onLoad: function (options) {
    var that = this
    console.log(options)
    wx.request({
      url: 'http://localhost:8082/goods/detail',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: options.id
      },
      success: res => {
        that.setData({
          detail: res.data.data
        })
        // 价格
        wx.setStorageSync('adultPrice', res.data.data.adultPrice);
        wx.setStorageSync('childPrice', res.data.data.childPrice);
        wx.setStorageSync('otherExpense', res.data.data.otherExpense)

        // 商品id
        wx.setStorageSync('goodsId', res.data.data.id)

        // 供应商id
        wx.setStorageSync('supplierId', res.data.data.supplierId)


        console.log(res.data.data);
        console.log("goodsId: " + res.data.data.id)
        var userId = app.globalData.openid
        console.log(userId)
        wx.request({
          url: 'http://localhost:8082/history/add',
          method: 'POST',
          data: {
            userId: userId,
            goodsId: res.data.data.id
          }
        })
      }
    })

  },

  collectGoods: function (options) {
    var that = this
    if (!that.data.collected) {
      wx.request({
        url: 'http://localhost:8082/collection/add',
        method: 'POST',
        data: {
          userId: app.globalData.openid,
          goodsId: that.data.detail.id
        },
        success: res => {
          that.setData({
            collected: true
          })
        }
      })
    }
  },

  swiperChange(e) {
    this.setData({
      cur_img_index: e.detail.current
    })
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

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      cur_tab_index: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  toDateSelect() {
    console.log(this.data.detail.earliestDate);
    // 放入缓存
    wx.setStorageSync('earliestDate', this.data.detail.earliestDate)
    wx.setStorageSync('latestDate', this.data.detail.latestDate)
    wx.navigateTo({
      url: '/pages/date_select/date_select'
    })
  }
})