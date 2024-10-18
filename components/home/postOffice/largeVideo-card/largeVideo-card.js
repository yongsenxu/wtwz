// components/home/postOffice/largeVideo-card/largeVideo-card.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    videoContent:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    praise:'/assets/icons/praise.png',
    praised:'/assets/icons/praised.png',
    praiseImage:'/assets/icons/praise.png',
    collect:'/assets/icons/collect.png',
    collected:'/assets/icons/collected.png',
    collectImage:'/assets/icons/collect.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    togglePraise(){
      if(this.data.praiseImage==this.data.praise){
        this.setData({
          praiseImage:this.data.praised
        })
      }else{
        this.setData({
          praiseImage:this.data.praise
        })
      }
    },
    toggleCollect(){
      if(this.data.collectImage==this.data.collect){
        this.setData({
          collectImage:this.data.collected
        })
      }else{
        this.setData({
          collectImage:this.data.collect
        })
      }
    },
  }
})