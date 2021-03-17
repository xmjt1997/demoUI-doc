<template>
  <div class="demo-button">
      <div class="item">
        <demo-button>默认按钮</demo-button>
      </div>
      <div class="item">
        <demo-button type="primary">主要按钮</demo-button>
      </div>
      <div class="item">
        <demo-button type="success">成功按钮</demo-button>
      </div>
      <div class="item">
        <demo-button type="info">信息按钮</demo-button>
      </div>
      <div class="item">
        <demo-button type="warning">警告按钮</demo-button>
      </div>
      <div class="item">
        <demo-button type="danger">危险按钮</demo-button>
      </div>
       <div class="item">
        <demo-button :round="true"></demo-button>
      </div>
      <div class="item">
        <demo-button :plain="true"></demo-button>
      </div>
  </div>
</template>

<script>
import DemoButton from '../modules/button/index.vue'
export default {
  name: 'buttonWrap',
  components: {
    DemoButton
  },
}
</script>

<style lang="less" scoped>
.demo-button{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px 0;
  text-align: center;
  justify-content:center;
  .item{
    padding: 10px;
  }
}
</style>

