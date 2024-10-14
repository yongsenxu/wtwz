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
  }
})
