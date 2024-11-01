Component({
  options: {
    addGlobalClass: true, // 允许全局样式影响到组件内部
  },
  data: {
    list: [],
    likeList: [{
      image: 'banner5',
      name: '基金定投：投资稳健增值的秘诀',
      logo: '../../images/logo1.png',
      username: '作者名称',
      like: '../../images/like.png',
      num: 123
    }],
    schoolTabList: [{
      name: '理财学堂'
    },{
      name: '支付学堂'
    },{
      name: '反诈学堂'
    },{
      name: '青少年'
    },{
      name: '老年人'
    },{
      name: '绿色金融'
    },{
      name: '养老金融'
    },{
      name: '反洗钱'
    },{
      name: '基金学堂'
    },{
      name: '信贷专区'
    }],
    backpackList: [{
      name: '我的奖状'
    },{
      name: '近期浏览'
    },{
      name: '近期学习'
    },{
      name: '吃灰收藏夹'
    },{
      name: '错题集'
    }]
  },
  methods:{
    jumpEventsMore(){
      wx.navigateTo({
        url: '/pages/home/investmentEvents/more/investmentEvents-more'
      })
    },
    jumpEventsDetails(){
      wx.navigateTo({
        url: '/pages/home/investmentEvents/details/investmentEvents-details'
      })
    },
    jumpPostDetails(){
      wx.navigateTo({
        url: '/pages/home/postOffice/details/postOffice-details'
      })
    },
    jumpPostMore(){
      wx.navigateTo({
        url: '/pages/home/postOffice/more/postOffice-more'
      })
    },
    jumpTVMore(){
      wx.navigateTo({
        url: '/pages/home/teachTV/teachTV'
      })
    },
    jumpmarketMore(){
      wx.navigateTo({
        url: '/pages/home/marketNews/more/marketNews-more'
      })
    },
    jumpmarketDetails(){
      wx.navigateTo({
        url: '/pages/home/marketNews/details/marketNews-details'
      })
    },
  }
})
