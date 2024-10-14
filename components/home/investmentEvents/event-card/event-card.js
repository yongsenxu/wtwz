// components/home/investmentEvents/event-card/event-card.js
// const data = require('../../../../data/home/investmentEvents/events.json');

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    eventCard: {
      type: Object,    // 定义类型为 Object
      value: {}        // 设置默认值为空对象
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  onLoad(){
    console.log(this.properties.eventCard)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})