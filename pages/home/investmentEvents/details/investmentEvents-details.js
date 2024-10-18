// pages/home/investmentEvents/details/investmentEvents-details.js
const eventsData=require('../../../../data/home/investmentEvents/events');
const productData=require('../../../../data/home/investmentEvents/product');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eventList:[],
    currentId: 0, 
    productList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      eventList:eventsData.events,
      productList:productData.product,
      currentId:options.id
    })
  },
  changePhase(e) {
    const selectedId = e.currentTarget.dataset.id;
    this.setData({
      currentId: selectedId
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})