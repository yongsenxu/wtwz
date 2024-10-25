// components/home/marketNews/comment-input/comment-input.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: '',
    hasInput: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInput: function(e) {
      this.setData({
        inputValue: e.detail.value,
        hasInput: e.detail.value.length > 0
      });
    }
  }
})