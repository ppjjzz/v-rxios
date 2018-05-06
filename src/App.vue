<template>
  <div id="app">
    <EditTable />
    <EditModal v-if="showEdit" @close="showEdit = false" />
    <el-button type="primary" @click="request">search</el-button>
    <el-input v-model="keyword" placeholder="请输入内容"></el-input>
  </div>
</template>

<script lang="ts" src="./App.ts">

</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
