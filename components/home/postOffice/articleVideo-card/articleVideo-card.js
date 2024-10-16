// components/home/postOffice/articleVideo-card/articleVideo-card.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    newsContent:{
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
  }
})