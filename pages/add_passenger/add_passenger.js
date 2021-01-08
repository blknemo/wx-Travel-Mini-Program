let app = getApp();

Page({

  data: {
    cur_tab: true,
    isCreating: true,
    id: 0,
    // uid: app.globalData.userInfo.user_id,
    name: '',
    mobile: '',
    id_card: '',
    valid_time: '',
    is_user: 0,
    is_init: 0,
    cur_cert_index:[ {label:"身份证",value:0}],
    certificates:[
      {label:"护照",value:1},
      {label:"港澳通行证",value:2},
      {label:"台胞证",value:3}
    ]
  },

  onLoad: function (options) {
    // cur_tab 为1代表常用旅客，2代表联系人
    // type 为1代表是新增，2代表是编辑
    wx.setNavigationBarTitle({
      title: options.cur_tab == 1 ? "编辑常用旅客" : '编辑常用联系人',
    })

    this.setData({
      cur_tab: options.cur_tab == 1 ? true : false,
      isCreating: options.type == 1 ? true : false
    })
  },
  handleNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  handleMobileInput(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  handleIdCardInput(e) {
    this.setData({
      id_card: e.detail.value
    })
  },
  handleValidTimeInput(e) {
    this.setData({
      valid_time: e.detail.value
    })
  },
  handleCheck(e) {
    this.setData({
      is_user: e.detail.value ? 1 : 0,
      is_init: e.detail.value ? 1 : 0
    })
  },
  navBack(e) {
    if (e) {
      let currentPages = getCurrentPages();
      let prePage = currentPages[currentPages.length - 2]
      prePage.setData({
        isPassenger: e.isPassenger,
        defaultId: e.id,
        isBack: true
      })
    }
    wx.navigateBack({
      delta: 1
    });
  },
  certSelect(e){
    var index = e.detail.value
    var cert_show = this.data.cur_cert_index.concat(this.data.certificates[index])
    this.data.certificates.splice(index,1)
    this.setData({cur_cert_index:cert_show,certificates:this.data.certificates})
  },
  certDelete(e){
    var value = e.currentTarget.dataset.index
    var index = this.getCertIndex(value)
    var cert_show = this.data.certificates.concat(this.data.cur_cert_index[index])
    this.data.cur_cert_index.splice(index,1)
    this.setData({cur_cert_index:this.data.cur_cert_index,certificates:cert_show})
  },
  getCertIndex(value){
    var del_index = 0
    this.data.cur_cert_index.forEach((item,index)=>{
      if(value == item.value)
          del_index = index
    })
    return del_index
  }
})