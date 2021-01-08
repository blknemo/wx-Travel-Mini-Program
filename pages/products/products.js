const app = getApp();

Page({

  data: {
    key_word:"搜索目的地",
    departure:"选择出发日期",
    handle_calendr:"暂不选择",
    cur_condition_index: 0,
    sorts:[
      {label:"综合排序",value:"rec"},
      {label:"销量高到低",value:"rec"},
      {label:"价格低到高",value:"rec"},
      {label:"价格高到低",value:"rec"},
      {label:"评分高到低",value:"rec"},
    ],
    securitys:["无自费","无购物","铁定出行","即时确认"],
    traffics:["直飞往返","动车/火车","巴士","邮轮"],
    days:["1天","2天","3天","4天","5天","6天","7天","8天及以上"],
    other_conditions:["直飞往返","动车/火车","巴士","无购物","无自费","铁定出行"],
    products:[
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "salary":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":false,
        "through_address":["南昌","武汉","成都"]
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "salary":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":true,
        "through_address":["南昌","武汉","成都","北京"]
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "salary":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":false,
        "through_address":["南昌","武汉","成都"]
      },
      {
        "avatar":"/public/imgs/test.jpg",
        "title":"三亚春节热售 豪品0自费 印象丽江+洱海大邮轮+玉龙雪山",
        "provider":"趣旅旅行",
        "destination":"三亚",
        "days":"6天5晚",
        "traffic":"动车往返",
        "salary":"3200",
        "score":"10.0",
        "sold_out_num":"321",
        "properties":["无自费","无购物","铁定出行"],
        "start_address":"武汉",
        "start_time":"10-1",
        "is_full":false,
        "through_address":["南昌","武汉","成都"]
      }
    ],
    calendarConfig: {
      // 配置内置主题
      theme: 'elegant',
      //高亮显示当天
      highlightToday: true,
      //禁选当天之前的日期
      disablePastDay: true,
      // 单选模式下是否支持取消选中
      inverse: true,
    },
  },
  showModal(e) {
    var index = 0
    if(e.currentTarget.dataset.index){
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

  onLoad: function (options) {

  },
  onShow: function () {

  },
  onReady: function () {
    this.calendar.enableArea(['2020-4-02', '2020-8-30']);
  },

})