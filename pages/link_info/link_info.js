
let app = getApp();
Page({

  data: {
    cur_tab: 0,
    tabBars: ["旅客", "联系人"],
    isPassenger: false,
    defaultId: 0,
    isBack: false,
    passengerList: [
      {
        id: 1,
        name: "阿",
        mobile: "13476818222",
        id_card: "420117199602826719",
        is_user: true
      }
    ],
    linkManList: [
      {
        id: 1,
        name: "阿甘1",
        mobile: "13476818222",
        is_init: true
      }
    ]
  },

  onLoad: function (options) {
  },

  //切换tab
  switchTab(e) {
    this.setData({
      cur_tab: e.currentTarget.dataset.hi
    })
  },
  onReady: function () {

  },

})