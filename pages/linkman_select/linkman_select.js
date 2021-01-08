
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

  toLinkManSelect(){
    wx.navigateTo({
      url: '/pages/linkman_choose/linkman_choose',
    })
  }

})