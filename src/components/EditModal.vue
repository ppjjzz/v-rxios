<template>
  <el-dialog title="编辑" :visible="true">
  <el-input v-model="name" placeholder="请输入内容"></el-input>
  <el-input v-model="address" placeholder="请输入内容"></el-input>
  <div slot="footer" class="dialog-footer">
    <el-button @click="closeModal">取 消</el-button>
    <el-button type="primary" @click="closeModal">确 定</el-button>
  </div>
</el-dialog>
</template>
<script lang="ts" src="./EditModal.ts">

</script>
