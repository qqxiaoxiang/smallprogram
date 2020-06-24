// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[],
    imageUrl: []
  },
  chooseImage(){
    wx.chooseImage({
      count: 9,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success: (res)=> {
        console.log(res);
        this.setData({
          images:[...this.data.images, ...res.tempFilePaths]
        })
      },
      fail: function(res) {},
      
    })
  },
  tijiao(){
    var that=this;
    var imageUrl=[];
    this.data.images.forEach((v,i)=>{
      wx.cloud.uploadFile({
        // 指定上传到的云路径
        cloudPath: i+'.png',
        // 指定要上传的文件的小程序临时文件路径
        filePath: v,
        // 成功回调
        success: res => {
          console.log('上传成功', res);
         imageUrl.push(res.fileID+'');
          that.setData({
            imageUrl
          })

        },
      })
    })
   
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