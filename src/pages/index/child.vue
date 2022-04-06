<template>
  <view class="child">
    <text>{{msg}}</text>
    <text>{{username}}</text>
    <text>{{item.page}}</text>
  </view>
</template>

<script>
import './index.less'


export default {
  props:['username','item'],
  data() {
    return {
      msg: '我是子组件'
    }
  }
}
</script>
