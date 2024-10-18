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
