// index.js
// 获取应用实例

Page({
    data: {
        day: 0
    },
    canvasIdErrorCallback(e) {
        console.error(e.detail.errMsg)
    },
    onReady: function() {
        let width = wx.getSystemInfoSync().screenWidth
        let height = wx.getSystemInfoSync().screenHeight
        console.log(width)
        console.log(height)
        const context = wx.createCanvasContext('firstCanvas')
        let text1 = 'New friends may be pomes but old'
        let text2 = 'friends are alphabets. Dont\'t forget'
        let text3 = 'the alphabets because you willl need'
        let text4 = 'them to resd the pomes'
        let topText = '已经打卡' + this.data.day + '天了'
        context.setFontSize(40)
        context.fillText('pome', width / 2 - 50, 100)
        context.moveTo(width / 2 - 70, 110)
        context.lineTo(width / 2 + 60, 110)
        context.moveTo(width / 2 - 70, 140)
        context.lineTo(width / 2 + 60, 140)
        context.stroke()
        context.setFontSize(15)
        context.setTextAlign('center')
        context.fillText(topText, width / 2, 20)
        context.fillText('/poem/', width / 2 - 40, 130)
        context.fillText('n.诗', width / 2 + 40, 130)
        context.setTextAlign('center')
        context.fillText(text1, 190, 300)
        context.fillText(text2, 190, 330)
        context.fillText(text3, 190, 360)
        context.fillText(text4, 190, 390)
        context.setGlobalAlpha(0.3)
        context.drawImage('../../image/background.jpg', 0, 0, width, height)
        context.draw()
    }
})
