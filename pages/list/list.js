// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods : [
      {
        id : 1,
        title : '  荣耀20 李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠 ',
        img : 'https://img12.360buyimg.com/mobilecms/jfs/t1/93667/17/1463/293247/5dbee215Ea07a0979/6ca60bc8cf3db20c.jpg',
        spec : ['6.26英寸','128GB','8G内存'],
        price : '￥2199.00',
        comment : '41万条评价 好评率96%',
        shop : '荣耀京东自营旗舰店'
      },
      {
        id : 2,
        title : '    Apple iPhone 11   ',
        img : 'https://img12.360buyimg.com/mobilecms/jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg',
        spec : ['6.1英寸','128GB','黑色'],
        price : '￥5999.00',
        comment : '34万条评价 好评率95%',
        shop : 'Apple产品荣耀京东自营旗舰店'
      },
      {
        id : 3,
        title : '  荣耀20 李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠 ',
        img : 'https://img12.360buyimg.com/mobilecms/jfs/t1/93667/17/1463/293247/5dbee215Ea07a0979/6ca60bc8cf3db20c.jpg',
        spec : ['6.26英寸','128GB','8G内存'],
        price : '￥2199.00',
        comment : '41万条评价 好评率96%',
        shop : '荣耀京东自营旗舰店'
      },
      {
        id : 4,
        title : '    Apple iPhone 11   ',
        img : 'https://img12.360buyimg.com/mobilecms/jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg',
        spec : ['6.1英寸','128GB','黑色'],
        price : '￥5999.00',
        comment : '34万条评价 好评率95%',
        shop : 'Apple产品荣耀京东自营旗舰店'
      },
      {
        id : 5,
        title : '  荣耀20 李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠 ',
        img : 'https://img12.360buyimg.com/mobilecms/jfs/t1/93667/17/1463/293247/5dbee215Ea07a0979/6ca60bc8cf3db20c.jpg',
        spec : ['6.26英寸','128GB','8G内存'],
        price : '￥2199.00',
        comment : '41万条评价 好评率96%',
        shop : '荣耀京东自营旗舰店'
      },
      {
        id : 6,
        title : '    Apple iPhone 11   ',
        img : 'https://img12.360buyimg.com/mobilecms/jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg',
        spec : ['6.1英寸','128GB','黑色'],
        price : '￥5999.00',
        comment : '34万条评价 好评率95%',
        shop : 'Apple产品荣耀京东自营旗舰店'
      },
      {
        id : 7,
        title : '  荣耀20 李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠 ',
        img : 'https://img12.360buyimg.com/mobilecms/jfs/t1/93667/17/1463/293247/5dbee215Ea07a0979/6ca60bc8cf3db20c.jpg',
        spec : ['6.26英寸','128GB','8G内存'],
        price : '￥2199.00',
        comment : '41万条评价 好评率96%',
        shop : '荣耀京东自营旗舰店'
      },
      {
        id : 8,
        title : '    Apple iPhone 11   ',
        img : 'https://img12.360buyimg.com/mobilecms/jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg',
        spec : ['6.1英寸','128GB','黑色'],
        price : '￥5999.00',
        comment : '34万条评价 好评率95%',
        shop : 'Apple产品荣耀京东自营旗舰店'
      }
    ],
    floorstatus : true,

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onPageScroll(ev) {
    console.log(ev.scrollTop);
    if(ev.scrollTop > 50){
      this.setData({
        floorstatus : false
      })
    }else{
      this.setData({
        floorstatus : true
      })
    }
  },
  backtop(ev){
    if(wx.pageScrollTo){
      wx.pageScrollTo({
        scrollTop : 0
      })
    }
    
  }

 
})