// components/home/bookCinema/sort-card/sort-card.js
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
    recommendItem:"推荐",
    typeItem:"分类",
    tagItem:"标签",
    sortList: [
      { title: "推荐", options: ["一周热门图书", "年度财经书籍top10","年度最佳"] },
      { title: "分类", options: ["小说", "经济", "金融", "投资", "历史","教材","防诈"] },
      { title: "标签", options: ["价值投资", "名人传记", "选股策略", "金融市场","人气排行"] }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onRecommend(e){
      this.setData({
        recommendItem:e.currentTarget.dataset.item
      })
    },
    onType(e){
      this.setData({
        typeItem:e.currentTarget.dataset.item
      })
    },
    onTag(e){
      this.setData({
        tagItem:e.currentTarget.dataset.item
      })
    }
  }
})