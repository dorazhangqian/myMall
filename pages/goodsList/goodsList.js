// pages/goodsList/goodsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPrice:false,
    minPrice:'',
    highPrice:'',
    goodsList:[
      {
        img: '../../assets/imgs/listImg.png',
        title: '学生看书架临帖读书架书立神器阅读架多功能竹书本读书神器',
        price:'29.00'
      },
      {
        img: '../../assets/imgs/listImg.png',
        title: '学生看书架临帖读书架书立神器阅读架多功能竹书本读书神器',
        price: '29.00'
      }
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
  showPrice(){
    this.setData({
      showPrice: !this.data.showPrice
    })
  },
  bindKeyInput1(e){
    this.setData({
      minPrice: e.detail.value
    })
  },
  bindKeyInput2(e) {
    this.setData({
      highPrice: e.detail.value
    })
  },
  priceList(){
    console.log(this.data.minPrice);
    if (this.data.minPrice == '' || this.data.highPrice == '' ){
      wx.showToast({
        title: '请输入正确金额',
        icon: 'success',
        duration: 3000
      });
    } else if (this.data.highPrice < this.data.minPrice){
      wx.showToast({
        title: '价格区间有误！',
        icon: 'success',
        duration: 3000
      });
    }else{
      this.setData({
        showPrice:false
      })
    }
  },
  enterSearch() {
    wx.navigateTo({
      url: '../search/search',
    })
  }
})