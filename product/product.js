const app = getApp()
// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    heidden1: false,
    heidden2: true,
    lists1: [],
    border1: true,
    border2: false
  },
  getLOlea: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/list',
      success: (res) => {
        this.setData({
          lists: res.data
        })
      }
    })
  }
  ,
  click: function () {
    var heidden1 = this.data.heidden1
    var border = this.data.border
    wx.request({
      url: 'http://127.0.0.1:3000/list',
      success: (res) => {
        this.setData({
          lists: res.data,
        })
      }
    })
    this.setData({
      heidden1: false,
      heidden2: true,
      border1: true,
      border2: false
    })
  },
  clickWorld: function () {
    var heidden2 = this.data.heidden2
    wx.request({
      url: 'http://127.0.0.1:3000/list',
      success: (res) => {
        this.setData({
          lists: res.data[7]
        })
      }
    })
    this.setData({
      heidden1: true,
      heidden2: false,
      border1: false,
      border2: true
    })
  },
  onclick: function (e) {
    var id = e.currentTarget.id;
    console.log(id);
    getApp().requestId = id
    wx.navigateTo({
      url: '/pages/details/details'
    })
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLOlea()
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

  }
})