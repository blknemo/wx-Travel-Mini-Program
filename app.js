
App({
  //0ad68ebe0fb08cebaf3cfa816c05468d
  onLaunch: function () {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })





    var that = this;
    // 查看是否授权
    wx.getSetting({
        success: function(res) {
            if (res.authSetting['scope.userInfo']) {
              // 用户已经授权过,不需要显示授权页面
              
            } else {
                // 用户没有授权
                wx.reLaunch({
                  url: '/pages/authorization/authorization',
                })
            }
        }
    });
  },
  globalData: {
    userInfo: {},
    openid: '123'
  }
})