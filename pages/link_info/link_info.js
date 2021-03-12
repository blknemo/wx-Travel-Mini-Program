
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
    var that = this;

    // 如果有跳转参数，那么就听从跳转参数的支配
    if (options != null) {
      console.log(options.cur_tab);
      that.setData({
        cur_tab: options.cur_tab
      })
    }

    if (that.data.cur_tab == 1) {
      // 如果是联系人界面
      console.log("联系人");
      wx.request({
        url: 'http://localhost:8082/contact/all/' + app.globalData.openid,
        // url: 'http://localhost:8082/contact/all/' + '111',
        method: 'GET',
        success(res) {
          that.setData({
            linkManList: res.data.data
          });
          // console.log(res.data);
          // console.log(that.data.linkManList);
          // console.log(that.data.linkManList.length);
          
        }
      })
    } else {
      // 如果是旅客界面
      console.log("旅客");
      wx.request({
        url: 'http://localhost:8082/passenger/all/' + app.globalData.openid,
        // url: 'http://localhost:8082/passenger/all/' + '111',
        method: 'GET',
        success(res) {
          that.setData({
            passengerList: res.data.data
          });
          console.log(that.data.passengerList);
        }
      })
    }
  },

  onShow: function (options) {
    var that = this;

    // 如果有跳转参数，那么就听从跳转参数的支配
    if (options != null) {
      console.log(options.cur_tab);
      that.setData({
        cur_tab: options.cur_tab
      })
    }

    if (that.data.cur_tab == 1) {
      // 如果是联系人界面
      console.log("联系人");
      wx.request({
        url: 'http://localhost:8082/contact/all/' + app.globalData.openid,
        // url: 'http://localhost:8082/contact/all/' + '111',
        method: 'GET',
        success(res) {
          that.setData({
            linkManList: res.data.data
          });
          // console.log(res.data);
          // console.log(that.data.linkManList);
          // console.log(that.data.linkManList.length);
          
        }
      })
    } else {
      // 如果是旅客界面
      console.log("旅客");
      wx.request({
        url: 'http://localhost:8082/passenger/all/' + app.globalData.openid,
        // url: 'http://localhost:8082/passenger/all/' + '111',
        method: 'GET',
        success(res) {
          that.setData({
            passengerList: res.data.data
          });
          console.log(that.data.passengerList);
        }
      })
    }
  },

  //切换tab
  switchTab(e) {
    var that = this;
    that.setData({
      cur_tab: e.currentTarget.dataset.hi
    })
    that.onLoad();
    // if (that.data.cur_tab == 1) {
    //   console.log("联系人");
    //   wx.request({
    //     url: 'http://localhost:8082/contact/all/' + app.globalData.openid,
    //     // url: 'http://localhost:8082/contact/all/' + '111',
    //     method: 'GET',
    //     success(res) {
    //       that.setData({
    //         linkManList: res.data.data
    //       });
    //       // console.log(res.data);
    //       // console.log(that.data.linkManList);
    //       // console.log(that.data.linkManList.length);
          
    //     }
    //   })
    // }
  },
  onReady: function () {

  },

  handelDel(e) {
    var that = this;
    if (that.data.cur_tab == 1) {
      // 联系人
      console.log(e.currentTarget.dataset.id);
      var id = e.currentTarget.dataset.id;
      wx.request({
        url: 'http://localhost:8082/contact/contact/' + id,
        method: 'DELETE',
        success() {
          that.onLoad();
        }
      })
    } else {
      // 旅客
      console.log(e.currentTarget.dataset.id);
      var id = e.currentTarget.dataset.id;
      wx.request({
        url: 'http://localhost:8082/passenger/passenger/' + id,
        method: 'DELETE',
        success() {
          that.onLoad();
        }
      })
    }
  }
})