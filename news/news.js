// pages/news/news.js
Page({
  sousuo: function () {
    wx.navigateTo({
      url: '/pages/sousuo/sousuo',
    })
  },
  bookText: function (e) {
    console.log(e)
    getApp().requestId = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/new/new',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    pageIndex: 0,
    pageSize: 8,
    hasMore: true,
    books: []
  },
  bookS: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/book',
      success: (res) => {
        console.log(res.data)
        this.setData({
          books: res.data
        })
      }
    })
  },
  loadMore: function () {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bookS()
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