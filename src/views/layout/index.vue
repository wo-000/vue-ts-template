<template>
  <div class="common-layout">
    <el-container class="page-wrap">
      <el-header class="header-box">
        <header-com></header-com>
      </el-header>
      <el-container>
        <menu-com></menu-com>
        <el-container>
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import HeaderCom from "./HeaderCom.vue";
import MenuCom from "./MenuCom.vue";
</script>
<style lang="scss" scoped>
.page-wrap {
  min-height: 100vh;
}
.header-box {
  background-color: #f0f0f0;
  height: 60px;
  line-height: 60px;
}
</style>
