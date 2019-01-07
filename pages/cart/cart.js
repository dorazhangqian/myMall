// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // input默认是1
    num: 1,
    // 使用data数据对象设置样式名
    minusStatus: 'disabled',
    chooseNum:0,
    listItem:[
      { id: '1', title: '学生看书架临帖读书架书立神器阅读架多功', img: '../../assets/imgs/listImg2.png', num: '2', price: '10', attr: '属性1;属性2', checked:false},
      { id: '2', title: '学生看书架临帖读书架书立神器阅读架多功', img: '../../assets/imgs/listImg2.png', num: '3', price: '20', attr: '属性1;属性2', checked:false }
        ],
    allPrice:0,
    selectedAllStatus: false,
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
   toConfirm() {
    wx.navigateTo({
      url: '../orderConfirm/orderConfirm'
    })
  },
  /* 点击减号 */
  bindMinus: function (e) {
    console.log(e);
    var num = this.data.num;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function (e) {
    console.log(e);
    var num = this.data.num;
    // 不作过多考虑自增1
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回
    this.setData({
      num: num
    });
  },
  toHomePage(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  // 单选按钮
  checkboxChange: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var listItem = this.data.listItem;
    var checked = this.data.listItem[index].checked;
    if (!checked) {
      this.setData({
        allPrice: parseInt(this.data.listItem[index].num) * parseFloat(this.data.listItem[index].price) + parseFloat(this.data.allPrice),
        chooseNum: this.data.chooseNum + 1
      });
    }
    else {
      this.setData({
        allPrice: parseFloat(this.data.allPrice) - parseInt(this.data.listItem[index].num) * parseFloat(this.data.listItem[index].price),
        chooseNum: this.data.chooseNum-1
      });
    }
    listItem[index].checked = !checked;
    var r = listItem.filter((item) => {
      return item.checked
    });
    if (r.length == listItem.length) {
      this.setData({
        selectedAllStatus: true
      })
    }
    else {
      this.setData({
        selectedAllStatus: false
      })
    }
    this.setData({
      listItem: listItem
    });
  },
  // 全选按钮
  allCheckbox: function (e) {
    var selectedAllStatus = this.data.selectedAllStatus;
    selectedAllStatus = !selectedAllStatus;
    this.setData({
      selectedAllStatus: selectedAllStatus
    })
    var listItem = this.data.listItem;
    if (selectedAllStatus) {
      for (var i = 0; i < listItem.length; i++) {
        listItem[i].checked = selectedAllStatus;
        var num = parseInt(this.data.listItem[i].num);
        var price = parseFloat(this.data.listItem[i].price);
        this.setData({
          allPrice: this.data.allPrice + num * price,
          listItem: listItem,
          chooseNum: listItem.length
        })
      }
    }
    else {
      for (var i = 0; i < listItem.length; i++) {
        listItem[i].checked = selectedAllStatus;
        var num = parseInt(this.data.listItem[i].num);
        var price = parseFloat(this.data.listItem[i].price);
        this.setData({
          allPrice: 0,
          listItem: listItem,
          chooseNum:0
        })
      }
    }
  }




})