// pages/new/new.js
// pages/book/book-1/book-1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    id: ''
  },
  bookText: function () {
    console.log()
    var id = this.data.id
    wx.request({
      url: 'http://127.0.0.1:3000/book',
      success: (res) => {
        this.setData({
          books: res.data[id - 1]
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var id = getApp().requestId
    this.setData({
      id: id
    })
    this.bookText()
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