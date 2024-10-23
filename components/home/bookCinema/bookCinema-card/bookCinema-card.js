// components/home/bookCinema/bookCinema-card/bookCinema-card.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    hotTopic:{
      type:Boolean,
      value:false
    },
    collectTime:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    operateList:[
      '/assets/icons/praise.png',
      '/assets/icons/forward.png',
      '/assets/icons/collect.png',
      '/assets/icons/comment.png'
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})