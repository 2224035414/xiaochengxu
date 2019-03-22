// pages/home/home.js
Page({
  souSuo: function () {
    wx.navigateTo({
      url: '/pages/sousuo/sousuo',
    })
  },
  title1: function () {
    var title_border = this.data.title_border
    // console.log(title_border)
    //console.log(border)
    this.setData({
      title_border1: false,
      title_border: true,
      hide1: true,
      hide: false
    })
  },
  title2: function () {
    var title_border = this.data.title_border1
    var hide = this.data.hide
    this.setData({
      title_border1: true,
      title_border: false,
      hide1: false,
      hide: true
    })
  },
  handleJumpnews: function (event) {
    var idhome = event.target.dataset.id;
    getApp().requestId = idhome
    wx.reLaunch({
      url: '/pages/details/details',
    })
  },
  data: {
    list: [
      { id: 1, img_url: 'img/1.jpeg' },
      { id: 2, img_url: 'img/2.jpeg' },
      { id: 3, img_url: 'img/3.jpeg' },
      { id: 4, img_url: 'img/4.jpeg' }
      ],
    nav: [
      { id: 1, img_url: 'http://127.0.0.1:3000/img/nav1.jpg', title: "春" },
      { id: 2, img_url: 'http://127.0.0.1:3000/img/nav2.jpg', title: "夏" },
      { id: 3, img_url: 'http://127.0.0.1:3000/img/nav3.jpg', title: "秋" },
      { id: 4, img_url: 'http://127.0.0.1:3000/img/nav4.jpg', title: "冬" }
    ],
    lists:[],
    title_border: true,
    title_border1: false,
    hide: false,
    hide1: true,
    change:0
  },
  cars:function(){
    wx.navigateTo({
      url: '/pages/cars/cars',
    })
  },
  getIMage: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/list',
      success: (res) => {
        this.setData({
          lists:res.data.slice(0,4)
        })
        // console.log(res.data);
        // console.log(this.data.lists)
      }
    })
  },
  onReachBottom: function () {
    this.data.change+=1;
    if(this.data.change<4)
    {
      wx.request({
        url: 'http://127.0.0.1:3000/list',
        success: (res) => {
          wx.showToast({
            title: '加载呢 别着急！',
            icon:'loading'
          })
          this.setData({
            lists: res.data.slice(0, 4*this.data.change)
          })
          setTimeout(function(){wx.hideToast();},1500)
        }
      })
    }
    else
    {
      wx.showToast({
        title: '没了 别刷了！',
        icon:'none'
      });
      setTimeout(function(){wx.hideToast();},5000)
      return;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIMage();
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})