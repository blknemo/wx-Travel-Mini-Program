
Page({

  data: {

    eva_item: [
      {
        name: '行程安排',
        score: 0
      },
      {
        name: '导游服务',
        score: 0
      },
      {
        name: '住宿体验',
        score: 0
      },
      {
        name: '餐食质量',
        score: 0
      },
      {
        name: '景区',
        score: 0
      },
      {
        name: '旅行交通',
        score: 0
      }
    ],
    product: {},
    score: 0,
    summaryNotice: ['非常差', '差', '一般', '好', '非常好'],
    notice: '',
    comment: '',
    order_id: 0,
    imgList: []
  },

  onLoad: function (options) {

  },
  
})