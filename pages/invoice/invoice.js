const app = getApp();

Page({

  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    curTab:0,
    tabs:["全部","待邮寄","已寄出","已签收"],
    TabCur: 0,
    scrollLeft:0,
    invoice:[
      {
        com_name:"凡诺科技",
        type:"企业",
        number:"926622631MA6Fe4NB55Y"
      },
      {
        com_name:"凡诺科技",
        type:"企业",
        number:"926622631MA6Fe4NB55Y"
      },
      {
        com_name:"凡诺科技",
        type:"企业",
        number:"926622631MA6Fe4NB55Y"
      }
    ]
  },

  onLoad: function (options) {

  },

  selectTab(e){
    var curTab = e.currentTarget.dataset.index
    this.setData({curTab:curTab})
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  }

})