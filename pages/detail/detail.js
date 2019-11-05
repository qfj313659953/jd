// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner : [
      {image : 'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/53499/7/14918/116810/5dbee48bE98f44bd9/6f199520387ace88.jpg'},
      {image : 'https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/43961/17/9910/200594/5d36d94dE1ccec7c3/2119602452efce60.jpg'},
      {image : 'https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/42612/24/9955/108155/5d36d971E06924b91/cab4b8cb4452d1ad.jpg'},
      {image : 'https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/83139/12/5287/140547/5d36d973E7f148692/f2e716870590b2f2.jpg'},
      {image : 'https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/74923/40/5211/30343/5d36d972E3633b917/73b95c048c9d16bc.jpg'}
    ],
    comments : [
      {username : '笑影', createTime : '2019-08-01',comment : '手机外观非常棒，设计时尚美观，非常上档次。布局合理，整体让人喜欢。系统非常稳定流畅，电池耐用。比较重度用一天问题不大。拍照很清晰，很nice。各种功能很完善，很强大。完全满足个人需求。游戏没怎么玩的，这辈子都不怎么玩的。取消了传统耳机圆孔，这点个人觉得非常不妥，跟充电孔统一了接口，非常不喜欢这点。总体而言，性价比高，性能好，完全符合个人预期'},
      {username : '试试', createTime : '2019-09-01',comment : '手机外观非常棒，设计时尚美观，非常上档次。布局合理，整体让人喜欢。系统非常稳定流畅，电池耐用。比较重度用一天问题不大。拍照很清晰，很nice。各种功能很完善，很强大。完全满足个人需求。游戏没怎么玩的，这辈子都不怎么玩的。取消了传统耳机圆孔，这点个人觉得非常不妥，跟充电孔统一了接口，非常不喜欢这点。总体而言，性价比高，性能好，完全符合个人预期'},
      {username : '式', createTime : '2019-08-05',comment : '手机外观非常棒，设计时尚美观，非常上档次。布局合理，整体让人喜欢。系统非常稳定流畅，电池耐用。比较重度用一天问题不大。拍照很清晰，很nice。各种功能很完善，很强大。完全满足个人需求。游戏没怎么玩的，这辈子都不怎么玩的。取消了传统耳机圆孔，这点个人觉得非常不妥，跟充电孔统一了接口，非常不喜欢这点。总体而言，性价比高，性能好，完全符合个人预期'},
      {username : 'j...d', createTime : '2019-08-08',comment : '手机外观非常棒，设计时尚美观，非常上档次。布局合理，整体让人喜欢。系统非常稳定流畅，电池耐用。比较重度用一天问题不大。拍照很清晰，很nice。各种功能很完善，很强大。完全满足个人需求。游戏没怎么玩的，这辈子都不怎么玩的。取消了传统耳机圆孔，这点个人觉得非常不妥，跟充电孔统一了接口，非常不喜欢这点。总体而言，性价比高，性能好，完全符合个人预期'},
      {username : '汇演买过', createTime : '2019-09-06',comment : '手机外观非常棒，设计时尚美观，非常上档次。布局合理，整体让人喜欢。系统非常稳定流畅，电池耐用。比较重度用一天问题不大。拍照很清晰，很nice。各种功能很完善，很强大。完全满足个人需求。游戏没怎么玩的，这辈子都不怎么玩的。取消了传统耳机圆孔，这点个人觉得非常不妥，跟充电孔统一了接口，非常不喜欢这点。总体而言，性价比高，性能好，完全符合个人预期'},
      {username : '华为手机', createTime : '2019-03-01',comment : '手机外观非常棒，设计时尚美观，非常上档次。布局合理，整体让人喜欢。系统非常稳定流畅，电池耐用。比较重度用一天问题不大。拍照很清晰，很nice。各种功能很完善，很强大。完全满足个人需求。游戏没怎么玩的，这辈子都不怎么玩的。取消了传统耳机圆孔，这点个人觉得非常不妥，跟充电孔统一了接口，非常不喜欢这点。总体而言，性价比高，性能好，完全符合个人预期'},
    ],
    floorstatus : true,
    scrollTop : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {

  },

  scroll(ev){
    let scrollTop = ev.detail.scrollTop;
   // console.log(scrollTop);
   if(scrollTop >= 100){
     this.setData({
       floorstatus : false
     })
   }else{
     this.setData({
       floorstatus : true
     });
   }
  },
  backtop(ev){
    this.setData({
      scrollTop : 0
    })

  },
  dopost(ev){
    
    let comm = {};
    let arr = [];
    comm.username = Math.floor(Math.random(100,1000)*1000);
    comm.createTime = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay();
    comm.comment = ev.detail.value.comment;
    //this.data.comments.push(comm);
    arr.push(comm);
    var comments = this.data.comments.concat(arr).reverse();
    //console.log(comments);
    this.setData({
      comments
    })
    
  },
  onShareAppMessage() {
    return {
      title : '荣耀20 PRO 李现同款 4800万全焦段AI四摄  双光学防抖 麒麟980 全网通4G 8GB+128GB 冰岛幻境 拍照手机',
      imageUrl : 'https://img12.360buyimg.com/mobilecms/jfs/t1/93667/17/1463/293247/5dbee215Ea07a0979/6ca60bc8cf3db20c.jpg',
      path:'/pages/detail/detail'
    }
  }
  
})