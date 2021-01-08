
Page({

  data: {
    passengerList: [
      {
        id: 1,
        name: "阿",
        mobile: "13476818222",
        id_card: "420117199602826719",
        is_user: true
      },
      {
        id: 1,
        name: "阿",
        mobile: "13476818222",
        id_card: "420117199602826719",
        is_user: true,
        tb_id:"18764373636"
      },
      {
        id: 1,
        name: "阿",
        mobile: "13476818222",
        id_card: "420117199602826719",
        is_user: true,
        hz_id:"213213224"
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

  toAddLinkMan(){
    wx.navigateTo({
      url: '/pages/add_passenger/add_passenger?cur_tab=1&type=1',
    })
  }
})