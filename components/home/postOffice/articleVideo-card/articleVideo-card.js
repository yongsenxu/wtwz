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
    praiseNumber:0
  },
  lifetimes: {
    attached() {
      this.setData({
        praiseNumber: this.data.newsContent.praiseNumber
      });
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    jumpPostDetails(){
      const id=this.properties.newsContent.id
      wx.navigateTo({
        url: `/pages/home/postOffice/details/postOffice-details?id=${id}`
      })
    },
    togglePraise(){
      if(this.data.praiseImage==this.data.praise){
        this.setData({
          praiseImage:this.data.praised,
          praiseNumber:this.data.newsContent.praiseNumber+1
        })
      }else{
        this.setData({
          praiseImage:this.data.praise,
          praiseNumber:this.data.newsContent.praiseNumber
        })
      }
    },
  }
})