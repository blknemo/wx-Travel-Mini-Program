let app = getApp();

Page({
  data: {
    // 联系人信息
    linkMan: {
      name: "",
      phone: "",
      isdefault: false
    },
    // 旅客信息
    passenger: {
      id: 1,
      name: "",
      mobile: "",
      id_card: "",
      is_user: "",
      credentials: []
    },

    // credential0: {},
    // credential1: {},
    // credential2: {},
    // credential3: {},


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
    cur_cert_index: [],
    certificates: [{
        label: "身份证",
        value: 0
      },
      {
        label: "护照",
        value: 1
      },
      {
        label: "港澳通行证",
        value: 2
      },
      {
        label: "台胞证",
        value: 3
      }
    ]
  },

  onLoad: function (options) {

    var that = this;
    // cur_tab 为1代表常用旅客，2代表联系人
    // type 为1代表是新增，2代表是编辑
    wx.setNavigationBarTitle({
      title: options.cur_tab == 1 ? "编辑常用旅客" : '编辑常用联系人',
    })

    this.setData({
      cur_tab: options.cur_tab == 1 ? true : false,
      isCreating: options.type == 1 ? true : false
    })



    if (!that.data.isCreating) { // 如果是编辑修改功能，需要将信息回显出来

      if (options.cur_tab == 2) { // 如果是联系人

        wx.request({
          url: 'http://localhost:8082/contact/contact/' + options.id,
          method: 'GET',
          success(res) {
            that.setData({
              linkMan: res.data.data
            });
            console.log(that.data.linkMan);
            // console.log(res.data);
          }
        })


      } else { // 如果是旅客
        wx.request({
          url: 'http://localhost:8082/passenger/passenger/' + options.id,
          method: 'GET',
          success(res) {
            that.setData({
              passenger: res.data.data
            });



            that.data.passenger.credentials.forEach(credential => {

              // TODO：需要判断每个证件并展开相应的证件，进行回显
              switch (credential.type) {
                case 0: // 身份证
                  that.setData({
                    // 'cur_cert_index[0].label': "身份证",
                    // 'cur_cert_index[0].value': 0
                    'credential0': credential
                  });

                  that.findAndAddCert(0);
                  break;
                case 1: // 护照
                  that.setData({
                    // 'cur_cert_index[1].label': "护照",
                    // 'cur_cert_index[1].value': 1
                    'credential1': credential

                  });
                  that.findAndAddCert(1);

                  break;
                case 2: // 通行证
                  that.setData({
                    // 'cur_cert_index[1].label': "护照",
                    // 'cur_cert_index[1].value': 1
                    'credential2': credential
                  });
                  // TODO：试一试这个能不能将要用到的证件回显
                  that.findAndAddCert(2);

                  break;
                case 3: // 台胞证
                  that.setData({
                    // 'cur_cert_index[1].label': "护照",
                    // 'cur_cert_index[1].value': 1
                    'credential3': credential

                  });
                  that.findAndAddCert(3);

                  break;

                default:
                  break;
              }
            });
            console.log(that.data.passenger);
            // console.log(res.data);
          }
        })
      }
    } else { // 如果是添加新用户，显示一个身份证即可
      if (options.cur_tab == 1) { // 如果是旅客

        var index = 0
        // 将数组certificates[index]并入数组cur_cert_index中
        var cert_show = that.data.cur_cert_index.concat(that.data.certificates[index])
        // 从index开始移除数组certificates中的1个元素
        that.data.certificates.splice(index, 1)
        that.setData({
          cur_cert_index: cert_show,
          certificates: that.data.certificates
        })
      }
    }


  },
  /**
   * 处理姓名输入，姓名这里需要判断是联系人姓名还是旅客姓名
   * @param {*} e 
   */
  handleNameInput(e) {
    if (this.data.cur_tab == false) {
      // 如果是联系人姓名
      this.setData({
        // name: e.detail.value
        'linkMan.name': e.detail.value
      });
      // console.log(this.data.name);
      console.log(this.data.linkMan.name);

    } else {
      // 如果是旅客姓名
      console.log("旅客姓名");
      this.setData({
        // name: e.detail.value
        'passenger.name': e.detail.value
      });
      // console.log(this.data.name);
      console.log(this.data.passenger.name);

    }
  },
  /**
   * 处理手机号输入，手机号这里需要判断是联系人还是旅客
   * @param {*} e 
   */
  handleMobileInput(e) {
    if (this.data.cur_tab == false) {
      // 如果是联系人
      this.setData({
        // mobile: e.detail.value
        'linkMan.phone': e.detail.value
      });
      // console.log(this.data.name);
      console.log(this.data.linkMan.phone);

    } else {
      // 如果是旅客
      console.log("旅客手机号");
      this.setData({
        // mobile: e.detail.value
        'passenger.phone': e.detail.value
      });
      // console.log(this.data.name);
      console.log(this.data.passenger.phone);
    }
  },
  /**
   * 处理证件号输入
   * @param {*} e 
   */
  handleIdCardInput(e) {

    var that = this;
    console.log(e.detail);
    console.log(e.currentTarget.dataset.index);

    // 当前目标（即 标签）的索引
    switch (e.currentTarget.dataset.index) {
      case '0':
        this.setData({
          // id_card: e.detail.value
          // 'passenger.credentials': this.passenger.credentials.concat(e.detail.value),
          'credential0.number': e.detail.value,
          'credential0.type': 0,

          // 'passenger.credentials[0].number': e.detail.value,
          // 'passenger.credentials[0].type': 0

        })
        console.log(that.data.credential0);
        break;
      case '1':
        this.setData({
          // id_card: e.detail.value
          // 'passenger.credentials[1].number': e.detail.value,
          // 'passenger.credentials[1].type': 1
          'credential1.number': e.detail.value,
          'credential1.type': 1

        })
        break;
      case '2':
        this.setData({
          // id_card: e.detail.value
          // 'passenger.credentials[2].number': e.detail.value,
          // 'passenger.credentials[2].type': 2
          'credential2.number': e.detail.value,
          'credential2.type': 2

        })
        break;

      case '3':
        this.setData({
          // id_card: e.detail.value
          // 'passenger.credentials[3].number': e.detail.value,
          // 'passenger.credentials[3].type': 3
          'credential3.number': e.detail.value,
          'credential3.type': 3

        })
        break;
    }


    // console.log(this.data.passenger.credentials[0].number);
    // console.log(this.data.passenger.credentials[1].number);
    // todo



    // console.log(this.data.passenger.credentials);


  },
  /**
   * 处理证件有效期输入
   * @param {*} e 
   */
  handleValidTimeInput(e) {

    console.log(e.detail);
    console.log(e.currentTarget.dataset);

    // 当前目标（即 标签）的索引
    switch (e.currentTarget.dataset.index) {
      case '0':
        this.setData({
          // valid_time: e.detail.value
          // 'passenger.credentials[0].effectiveDate': e.detail.value
          'credential0.effectiveDate': e.detail.value
        });
        break;
      case '1':
        this.setData({
          // valid_time: e.detail.value
          // 'passenger.credentials[1].effectiveDate': e.detail.value
          'credential1.effectiveDate': e.detail.value

        });
        break;
      case '2':
        this.setData({
          // valid_time: e.detail.value
          // 'passenger.credentials[2].effectiveDate': e.detail.value
          'credential2.effectiveDate': e.detail.value

        });
        break;

      case '3':
        this.setData({
          // valid_time: e.detail.value
          // 'passenger.credentials[3].effectiveDate': e.detail.value
          'credential3.effectiveDate': e.detail.value

        });
        break;
    }


    // console.log(this.data.passenger.credentials[0].number);
    // console.log(this.data.passenger.credentials[1].number);
    // todo
    console.log(this.data.passenger.credentials);
  },
  /**
   * 设置为默认，这里也需要判断是联系人还是旅客
   * @param {*} e 
   */
  handleCheck(e) {
    if (this.data.cur_tab == false) {
      // 如果是联系人
      this.setData({
        // is_user: e.detail.value ? 1 : 0,
        // is_init: e.detail.value ? 1 : 0
        'linkMan.isdefault': e.detail.value
      })
      // console.log(this.data.name);
      console.log(this.data.linkMan.isdefault);

    } else {
      // 如果是旅客
      console.log("默认旅客");
      this.setData({
        // is_user: e.detail.value ? 1 : 0,
        // is_init: e.detail.value ? 1 : 0
        'passenger.self': e.detail.value
      })
      // console.log(this.data.name);
      console.log(this.data.linkMan.isdefault);
    }
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
  /**
   * 证件选择
   * @param {*} e 
   */
  certSelect(e) {
    console.log(e);
    var index = e.detail.value
    // 将数组certificates[index]并入数组cur_cert_index中
    var cert_show = this.data.cur_cert_index.concat(this.data.certificates[index])
    // 从index开始移除数组certificates中的1个元素
    this.data.certificates.splice(index, 1)
    this.setData({
      cur_cert_index: cert_show,
      certificates: this.data.certificates
    })
  },
  /**
   * 证件删除
   * @param {*} e 
   */
  certDelete(e) {
    var value = e.currentTarget.dataset.index
    var index = this.getCertIndex(value)
    var cert_show = this.data.certificates.concat(this.data.cur_cert_index[index])
    this.data.cur_cert_index.splice(index, 1)
    this.setData({
      cur_cert_index: this.data.cur_cert_index,
      certificates: cert_show
    })
    // 清空并删除指定索引的指定证件对象
    switch (value) {
      case '0':
        // 这里需要清空一下对象，避免缓存问题
        this.setData({
          credential0: {}
        })
        delete this.data.credential0;
        break;

      case '1':
        this.setData({
          credential1: {}
        })
        delete this.data.credential1;
        break;

      case '2':
        this.setData({
          credential2: {}
        })
        delete this.data.credential2;
        break;

      case '3':
        this.setData({
          credential3: {}
        })
        delete this.data.credential3;
        break;

      default:
        break;
    }
    console.log(this.data);
  },
  /**
   * 获取证件索引
   * @param {*} value 
   */
  getCertIndex(value) {
    var del_index = 0
    this.data.cur_cert_index.forEach((item, index) => {
      if (value == item.value)
        del_index = index
    })
    return del_index
  },


  cannotEmpty(e) {
    // if (e.detail.value == '') {
    //   this.setData({
    //     warn: '不能为空',
    //     isEmpty: false
    //   })
    //   console.log("不能为空");
    // } else {
    //   this.setData({
    //     warn: ''
    //   })
    // }
  },



  handleSave() {
    var that = this;

    if (that.data.cur_tab == false) {

      // 如果是联系人
      var contant = that.data.linkMan;
      if (contant.name == '') {
        that.setData({
          warn: '姓名不能为空'
        })
      } else if (contant.phone == '') {
        that.setData({
          warn: '手机号码不能为空'
        })
      } else {
        if (that.data.isCreating) {
          // 如果是创建联系人
          console.log(this.data.linkMan);
          that.setData({
            'linkMan.userId': app.globalData.openid
          })
          wx.request({
            url: 'http://localhost:8082/contact/contact/',
            method: 'POST',
            data: that.data.linkMan,
            success() {
              wx.redirectTo({
                url: '/pages/link_info/link_info?cur_tab=1',
              })
            }
          })
        } else {
          // 如果是修改联系人
          wx.request({
            url: 'http://localhost:8082/contact/contact/',
            method: 'PUT',
            data: that.data.linkMan,
            success() {
              // wx.navigateTo({
              //   url: '/pages/link_info/link_info?cur_tab=1',
              // })
              // wx.navigateBack({
              //   delta: 1,
              // })
              // 这里能用跳转，得用重定向
              wx.redirectTo({
                url: '/pages/link_info/link_info?cur_tab=1',
              })
            }
          })
        }
      }




    } else { // 如果是旅客
      var passenger = that.data.passenger;

      if (passenger.name == '') { // 判断是否为空
        that.setData({
          warn: '姓名不能为空'
        })
      } else if (passenger.phone == '') {
        that.setData({
          warn: '手机号码不能为空'
        })
      } else { // 如果不为空


        if (that.data.isCreating) { // 如果是创建旅客
          if (that.data.credential0) {
            that.data.passenger.credentials.push(that.data.credential0);
            // var a = that.data.passenger.credentials;
            // console.log(a);
            // var b = a.push(that.data.credential0)
            // console.log(b);
          }
          if (that.data.credential1) {
            that.data.passenger.credentials.push(that.data.credential1);
          }
          if (that.data.credential2) {
            that.data.passenger.credentials.push(that.data.credential2);
          }
          if (that.data.credential3) {
            that.data.passenger.credentials.push(that.data.credential3);
          }

          that.setData({
            'passenger.userId': app.globalData.openid,
          })
          console.log(that.data.passenger);

          wx.request({
            url: 'http://localhost:8082/passenger/passenger',
            method: 'POST',
            data: that.data.passenger,
            success() {
              // wx.navigateTo({
              //   url: '/pages/link_info/link_info?cur_tab=0',
              // })
              // wx.navigateBack({
              //   delta: 1,
              // })
              // that.onLoad();
              wx.redirectTo({
                url: '/pages/link_info/link_info?cur_tab=0',
              })
            }
          })

        } else { // 如果是修改旅客

          wx.request({
            url: 'http://localhost:8082/passenger/passenger/',
            method: 'PUT',
            data: that.data.passenger,
            success() {
              // wx.navigateTo({
              //   url: '/pages/link_info/link_info?cur_tab=1',
              // })
              // wx.navigateBack({
              //   delta: 1,
              // })
              // 这里能用跳转，得用重定向
              wx.redirectTo({
                url: '/pages/link_info/link_info?cur_tab=0',
              })
            }
          })
        }
      }

    }

  },





  /**
   * 工具函数，找到对应的证件并加入
   * @param {*} i 
   */
  findAndAddCert(i) {
    var that = this;
    var index = that.data.certificates.findIndex(c => c.value == i);
    // var index = that.data.certificates.indexOf({label:'身份证', value: 0});
    console.log(index);
    var cert_show = that.data.cur_cert_index.concat(that.data.certificates[index])
    that.data.certificates.splice(index, 1)
    that.setData({
      cur_cert_index: cert_show,
      certificates: that.data.certificates
    })
  }
})