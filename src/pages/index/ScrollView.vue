<template>
  <view>
    <text>我是ScrollView</text>
    <Button @click="click()">调用Js setData</Button>
    <Button @click="click2()">调用Js getData</Button>
  </view>
</template>

<script>
import {Current} from "@tarojs/taro";
import Taro from "@tarojs/taro";
import utils from "../../utils";



export default {
  name: "ScrollView",
  onReady() {
    const goodsId = Taro.getCurrentInstance().router.params.goodsId
    //alert('onReady')
    console.log('onReady:' + goodsId);
  },
  methods: {
    click() {
      alert('1111')
      utils.setData();
    },
    click2() {
      utils.getData();
    }
  }


}
</script>

<style lang="scss" scoped>

</style>
