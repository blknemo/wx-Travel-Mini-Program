
Page({

  data: {
    cardCur: 0,
    detail:{
      name:"Healer",
      time:"2020-04-05",
      avatar:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIIyvZt8rnGnOToa3ia8h7xWF3bQEn81TAuDkyzoWa5EeWPYyQ7bX5o1dNA7k9MQRSwicMO3yAr2tkA/132",
      title:"城南小陌又逢春，只见梅花不见人，人有生老三千疾，唯有相思不可医。",
      imgs:["/public/imgs/test.jpg","/public/imgs/test.jpg","/public/imgs/test.jpg"],
      content:"阿甘是个智商只有75的低能儿。在学校里为了躲避别的孩子的欺侮，听从一个朋友珍妮的话而开始“跑”。他跑着躲避别人的捉弄。在中学时，他为了躲避别人而跑进了一所学校的橄榄球场，就这样跑进了大学。阿甘被破格录取，并成了橄榄球巨星，受到了肯尼迪总统的接见。",
      city:"武汉",
      likes:["/public/imgs/avatar.jpg","/public/imgs/avatar.jpg","/public/imgs/avatar.jpg"],
      view_num:"66",
      like_num:"164",
      comment_num:"2",
      is_like:false,
      comments:[
        {
          name:"490384894",
          avatar:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIIyvZt8rnGnOToa3ia8h7xWF3bQEn81TAuDkyzoWa5EeWPYyQ7bX5o1dNA7k9MQRSwicMO3yAr2tkA/132",
          text:"风景美美，心情舒畅！",
          is_like:false,
          like_num:"16",
          time:"04-16",
          replays:[
            {
              target_name:"TY",
              name:"490384894",
              avatar:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIIyvZt8rnGnOToa3ia8h7xWF3bQEn81TAuDkyzoWa5EeWPYyQ7bX5o1dNA7k9MQRSwicMO3yAr2tkA/132",
              text:"风景美美，心情舒畅！",
              is_like:true,
              like_num:"16",
              time:"刚刚",
            },
            {
              target_name:"TY",
              name:"490384894",
              avatar:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIIyvZt8rnGnOToa3ia8h7xWF3bQEn81TAuDkyzoWa5EeWPYyQ7bX5o1dNA7k9MQRSwicMO3yAr2tkA/132",
              text:"风景美美，心情舒畅！",
              is_like:false,
              like_num:"16",
              time:"刚刚",
            },
            {
              target_name:"TY",
              name:"490384894",
              avatar:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIIyvZt8rnGnOToa3ia8h7xWF3bQEn81TAuDkyzoWa5EeWPYyQ7bX5o1dNA7k9MQRSwicMO3yAr2tkA/132",
              text:"风景美美，心情舒畅！",
              is_like:true,
              like_num:"16",
              time:"刚刚",
            }
          ],
          is_hide:true,
        },
        {
          name:"490384894",
          avatar:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIIyvZt8rnGnOToa3ia8h7xWF3bQEn81TAuDkyzoWa5EeWPYyQ7bX5o1dNA7k9MQRSwicMO3yAr2tkA/132",
          text:"风景美美，心情舒畅！",
          is_like:true,
          like_num:"16",
          time:"04-16",
          replays:[],
          is_hide:false,
        },
      ]
    },
  },

  onLoad: function (options) {

  },

  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },

  like(e){
    var index1 = e.currentTarget.dataset.index1
    var changeOne = "";
    if(typeof e.currentTarget.dataset.index2 != "undefined"){
      var index2 = e.currentTarget.dataset.index2
      changeOne = "detail.comments[" + index1 + "].replays[" + index2 + "].is_like";
      this.setData({
        [changeOne ]:!this.data.detail.comments[index1].replays[index2].is_like
      })
    }else{
      changeOne = "detail.comments[" + index1 + "].is_like";
      this.setData({
        [changeOne ]:!this.data.detail.comments[index1].is_like
      })
    }

  },

  show_more_comment(e){
    var index = e.currentTarget.dataset.index
    var changeOne = "detail.comments[" + index + "].is_hide";
		this.setData({
		[changeOne ]:!this.data.detail.comments[index].is_hide
	  })
  }
 
})