const app = getApp();
Page({

  data: {
    passengerList: [{
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
        tb_id: "18764373636"
      },
      {
        id: 1,
        name: "阿",
        mobile: "13476818222",
        id_card: "420117199602826719",
        is_user: true,
        hz_id: "213213224"
      }
    ],
    linkManList: [{
      id: 1,
      name: "阿甘1",
      mobile: "13476818222",
      is_init: true
    }]
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
            passengerList: res.data.data
          });
          console.log(res.data);
          console.log(that.data.passengerList);
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

  selected(e) {
    var that = this;
    console.log(e.detail);
    var id = e.detail.value;

    that.setData({
      selectedId: id
    })
  },

  submit() {
    var that = this;
    if (that.data.cur_tab == 1) {
      // 如果是联系人界面
      wx.request({
        url: 'http://localhost:8082/contact/contact/' + that.data.selectedId,
        method: 'GET',
        success(res) {
          console.log(res.data.data);
          that.setData({
            linkMan: res.data.data
          })
          wx.setStorageSync('linkMan', that.data.linkMan)
          // wx.navigateTo({
          //   url: '/pages/linkman_select/linkman_select',
          // })
          wx.navigateBack({
            delta: 1,
          })
        }
      })
    } else {
      // 如果是旅客界面
      wx.request({
        url: 'http://localhost:8082/passenger/passenger/' + that.data.selectedId,
        method: 'GET',
        success(res) {
          console.log(res.data.data);
          that.setData({
            passenger: res.data.data
          })
          // wx.navigateBack({
          //   delta: 1,
          // })
          
          wx.setStorageSync('passenger', that.data.passenger)

          wx.navigateTo({
            url: '/pages/linkman_select/linkman_select',
          })
        }
      })
    }
    
    
    // if (that.data.cur_tab == 1) {
    //   // 如果是联系人界面

    // } else {
    //   // 如果是旅客界面
    // }

  },

  toAddLinkMan() {
    wx.navigateTo({
      url: '/pages/add_passenger/add_passenger?cur_tab=2&type=1',
    })
  }
})