<template>
  <view class="components-page">
    <text>{{ msg }}</text>
    <Child :username="interval" :item="item"/>
    <Button @click="goto">点击我2</Button>

    <text>flex-direction: row 横向布局</text>
    <view class="flex-wrp flex-wrp-row" hover-class="hover">
      <view class="flex-item demo-text-1" :hover-stop-propagation="true"/>
      <view class="flex-item demo-text-2" hover-start-time="1000" hover-class="hover"/>
      <view class="flex-item demo-text-3" hover-stayTime="1000" hover-class="hover"/>
    </view>
    <text>flex-direction: column 纵向布局</text>
    <view class="flex-wrp flex-wrp-column">
      <view class="flex-item flex-item-V demo-text-1"/>
      <view class="flex-item flex-item-V demo-text-2"/>
      <view class="flex-item flex-item-V demo-text-3"/>
    </view>
  </view>
</template>

<script>
import './index.less'
import Child from "./child";
import Taro from "@tarojs/taro";


export default {
  components: {Child},
  data() {
    return {
      msg: 'Hello world!',
      interval: 1000,
      item: {
        page: 'add'
      },
    }
  },
  methods: {
    goto() {
      //alert('goto')
      console.log('goto')
      //Taro.redirectTo({
      //  url: '/pages/index/ScrollView'
      //})
      Taro.navigateTo({
        url: '/pages/index/ScrollView?goodsId=1'
      })
    }
  }
}
</script>

<style>
.flex-wrp {
  display: flex;
}

.flex-wrp-column {
  flex-direction: column;
}

.flex-wrp-row {
  flex-direction: row;
  padding: 20px;
  background: #f1f1f1;
}

.flex-item {
  width: 180px;
  height: 90px;
}

.demo-text-1 {
  background: #ccc;
}

.demo-text-2 {
  background: #999;
}

.demo-text-3 {
  background: #666;
}

.hover {
  background: #000;
}
</style>
