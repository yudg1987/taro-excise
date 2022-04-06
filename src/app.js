import Vue from 'vue'
import './app.less'

const App = {
  onShow (options) {
    console.log('onShow')
  },

  // 可以使用所有的 Vue 生命周期方法
  mounted () {
    console.log('mounted')
  },

  // onLoad
  onLoad () {
    console.log('onLoad')
  },

  // onReady
  onReady () {
    console.log('onReady')
  },

  // 对应 onHide
  onHide () {},

  // 对应 onPullDownRefresh
  onPullDownRefresh () {},

  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
