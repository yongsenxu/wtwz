Component({
  options: {
    addGlobalClass: true, // 允许全局样式影响到组件内部
  },
  data: {
    list: [],
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
