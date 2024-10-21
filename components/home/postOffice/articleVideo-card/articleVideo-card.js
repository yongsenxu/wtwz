// components/home/postOffice/articleVideo-card/articleVideo-card.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    newsContent:{
      type:Object,
      value:{}
    },
    disableJump:{
      type:Boolean,
      value:false
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
      if (this.properties.disableJump) {
        console.log(this.properties.disableJump)
    return;  // 直接返回，阻止进一步执行跳转
     }
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