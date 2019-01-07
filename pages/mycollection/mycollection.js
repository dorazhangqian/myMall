// pages/mycollection/mycollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collections:[
      { title: '学生看书架临帖读书架书立神器阅读架多功架多 阅读架多功架多', img:'../../assets/imgs/swiperImg.png',price:'48.00'},
      { title: '学生看书架临帖读书架书立神器阅读架多功架多 阅读架多功架多', img: '../../assets/imgs/swiperImg.png', price: '48.00' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toHomePage(){
    wx.reLaunch({
      url: '../index/index'
    })
  },
  togoodsDetail() {
    wx.navigateTo({
      url: '../goodsDetail/goodsDetail',
    })
  }
})