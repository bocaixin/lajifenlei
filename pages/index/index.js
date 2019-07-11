// pages/index/index.js
var getList;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datatype:0,
    show: false,
    resultList: [],
    value: ''
  },
  myName:function(e){
    this.setData({
      datatype: e.detail,
      show: false
    })
  },
  myName1: function (e) {
    this.setData({
      value: e.detail
    })
  },
  oninput: function (e) {
    this.setData({
      show: true,
      value: e.detail.value
    })
    if(!this.data.value){
      this.setData({
        show: false,
        datatype:0
      })
      
    }else{
      this.setData({
        show: true
      });
      clearTimeout(getList);
      getList = setTimeout(getRubname, 500);
      var that = this
      function getRubname() {
        wx.request({
          url:'https://xibei.vizone.cc/rubbish/api.php',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            'apikey': '46ff14fd53db5d67',
            'rubname': that.data.value
          },
          method: 'POST',
          success: (res) => {
            that.setData({
              resultList:res.data.data
            })
          }
        })
      }


    }

  },
  
  cx: function () {
    this.setData({
      show: false
    })
    if (!this.data.value) {
      wx.showToast({
        title: '请输入要查询的垃圾名称',
        icon: 'none',
        duration: 2000
      })
    }else{
      wx.request({
        url: 'https://xibei.vizone.cc/rubbish/api.php',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          'apikey': '46ff14fd53db5d67',
          'rubbishname': this.data.value
        },
        method: 'POST',
        success: (res) => {
          if (res.data.code=='00'){
            this.setData({
              datatype: res.data.rtype,
            })
          }else{
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000
            })
          }
          
        }
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