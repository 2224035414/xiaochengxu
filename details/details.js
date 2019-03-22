// pages/news/news.js

var app = getApp();
Page({
  data: {
    lists: [],
    showView: true,
    num: 1,
    disabled1: false,
    yingchang1: true,
    id: '',
    list2: [{ url: 'http://127.0.0.1:3000/img/666.jpg' }],
    numm: []
  },
  chumo: function () {
    var showView = this.data.showView
    this.setData({
      showView: true
    });

  },
  handleJumphome: function () {
    wx.reLaunch({
      url: '/pages/home/home',
    })
  },
  queding: function (e) {
    var num = this.data.num;
    var showView = this.data.showView;
    var yingchang1 = this.data.yingchang1;

    var goods = this.data.lists;
    var count = goods.count;

    if (num >= 1) {
      this.setData({
        showView: true,
        yingchang1: false,

      });

      var numm = this.data.numm
      var arr = wx.getStorageSync('cart') || [];
      console.log(arr)
      console.log(arr.length)
      if (arr.length >= 0) {
        console.log(arr)
        for (var j in arr) {
          console.log(j)
          if (arr[j].id == this.data.id) {
            arr[j].count = Number(arr[j].count) + Number(num);
            console.log(arr[j].count)
            this.setData({
              numm: arr[j].count
            })
            wx.setStorageSync('cart', arr)
            console.log('这里出的问题detailsP57！')
            wx.showToast({
              title: '加入购物车成功！',
              icon: 'succe ss',
              duration: 2000
            });
            return;
          }
        }
        arr.push(goods);
      } else {
        arr.push(goods);
      }
      try {
        wx.setStorageSync('cart', arr)
        for (var j in arr) {
          if (arr[j].id == this.data.id) {
            arr[j].count += arr[j].count + num;
            // arr[j].price = (arr[j].price * num )
            // console.log(arr[j].price)
            // console.log(arr[j].count)
            this.setData({
              numm: arr[j].count
            })
            wx.setStorageSync('cart', arr)
            console.log('这里出的问题detailsP82！')
            wx.showToast({
              title: '加入购物车成功！',
              icon: 'success',
              duration: 2000
            });
            return;
          }
        }
        arr.push(goods);
        console.log
        console.log('这里问题detailsP93!')
        wx.showToast({
          title: '加入购物车成功！',
          icon: 'success',
          duration: 2000
        });

        return;
      } catch (e) {
        console.log(e)
      }

    }
    else {
      wx.showToast({
        title: '数量超出范围！',
        duration: 3000,
        image: '/pages/img/警告 (2).png',
      })
      this.setData({
        yingchang1: true
      });
    }

  },
  click: function () {
    var id = this.data.id
    wx.reLaunch({
      url: '/pages/itemcar/itemcar?id=' + id
    })
  }

  ,
  anniu1: function () {
    var num = this.data.num;
    if (num > 1) {
      num--
      this.setData({
        num: num
      })
    }
  },
  anniu2: function () {
    var num = this.data.num;
    var disabled1 = this.data.disabled1
    num++
    this.setData({
      num: num,
      disabled1: false
    })

  },
  input1: function (e) {
    var num = e.detail.value
    var id = this.data.id
    this.setData({
      num: num,
      id: id
    })
    if (num < 1) {
      wx.showToast({
        title: '数量超出范围！',//显示内容
        duration: 3000,//持续时间
        image: '/pages/img/警告 (2).png',
      })
    }
    if (num === 0) {
      var disabled1 = this.data.disabled1
      console.log(disabled1)
      this.setData({
        disabled1: true
      })
    }
  },

  /**
   * 
   * 页面的初始数据
   */
  

  //发送ajax请求  
  getImageList: function () {
    var id = this.data.id
    var title = this.data.title
    wx.request({
      url: 'http://127.0.0.1:3000/list',
      success: (res) => {

        this.setData({
          lists: res.data[id - 1],
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
    this.getImageList()
    showView: (options.showView == "true" ? true : false)
  },
  preventTouchMove: function () {

  },
  onChang: function () {
    this.setData({
      showView: (!this.data.showView)
    });
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