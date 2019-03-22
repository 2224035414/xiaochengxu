// pages/shopping/shopping.

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,//列表是否有数据
    totalPrice: 0,//总价初始为0
    more: [],
    carts: [],
    id: [],
    hide: false
  },
  // shopping:function(){
  //   var id =getApp().requestId
  //   var carts=this.data.carts;
  //   var arr = app.globalData.arr
  //   console.log(arr)
  //   console.info("缓存数据：" + arr);
  //   this.setData({
  //     arr1:arr
  //   })

  // },
  //删除
  shanchu: function (e) {
    var carts = this.data.carts//获取购物车列表
    // var id = e.currentTarget.dataset.id
    var index = e.currentTarget.dataset.index
    console.log(e)
    if (this.data.carts.length >= 0) {
      carts.splice(index, 1)
      this.setData({
        carts: carts
      });
    }
    wx.setStorageSync("cart", carts)
    if (carts.length < 1) {
      this.setData({
        hide: true
      })
    }
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
  onShow: function (event) {
    var arr = wx.getStorageSync('cart') || [];
    var carts = this.data.carts
    var id = this.data.id

    console.info("缓存数据：" + arr);
    if (arr.length > 0) {
      this.setData({
        carts: arr,
      });
      console.info("缓存数据：" + this.data.carts);

    }
    // for(var i = 0; i<arr.length;i++){
    //   id.push(i)
    // }
    // console.log(id)
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