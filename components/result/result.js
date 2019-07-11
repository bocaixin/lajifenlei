// components/result/result.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    resultList: Array,
    datatype: String,
    value: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    search: function(res) {
      if (res.target.dataset.sec !== "未找到相关数据") {
        var v = res
        wx.request({
          url: 'https://xibei.vizone.cc/rubbish/api.php',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            'apikey': '46ff14fd53db5d67',
            'rubbishname': res.target.dataset.sec
          },
          method: 'POST',
          success: (res) => {
            this.setData({
              datatype: res.data.rtype,
              value: v.target.dataset.sec
            })
            this.triggerEvent('getName', this.properties.datatype);
            this.triggerEvent('getName1', this.properties.value)
          }
        })

      }

    }
  }
})