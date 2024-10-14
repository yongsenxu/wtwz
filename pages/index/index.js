import {cityData} from './data'

Component({
  options: {
    addGlobalClass: true, // 允许全局样式影响到组件内部
  },
  data: {
    list: [],
  },
  methods:{
    jump(){
      wx.navigateTo({
        url: '/pages/home/investmentEvents/investmentEvents'
      })
    },
  }
})
