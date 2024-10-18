// components/home/investmentEvents/event-card/event-card.js

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    eventCard: {
      type: Object,    // 定义类型为 Object
      value: {}        // 设置默认值为空对象
    },
    eventCardStyle:{
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

  },
  onLoad(){
  },
  /**
   * 组件的方法列表
   */
  methods: {
    jumpEventsDetails(){
      if (this.properties.disableJump) {
        console.log(this.properties.disableJump)
    return;  // 直接返回，阻止进一步执行跳转
     }
      const id = this.properties.eventCard.id
      wx.navigateTo({
        url: `/pages/home/investmentEvents/details/investmentEvents-details?id=${id}`
      })
    }
  }
})