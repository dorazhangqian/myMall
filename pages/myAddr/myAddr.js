// pages/myAddr/myAddr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addrs:[
      { addr: "四川省 成都市 武侯区 什么街道", name: "用户填写", phone: "18980008674", flag:true},
      { addr: "四川省 成都市 武侯区 什么街道", name: "用户填写", phone: "18980008674", flag: false }
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
  toAddAddr(){
    wx.navigateTo({
      url: '../addAddr/addAddr',
    })
  }
})