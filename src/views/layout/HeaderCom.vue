<template>
  <div class="header-wrap">
    <div class="logo-box">
      <svg-icon icon-class="logo" class-name="logo"></svg-icon>
      <span>管理系统</span>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-wrap {
  .logo-box {
    display: flex;
    align-items: center;
    .logo {
      width: 30px;
      height: 20px;
    }
  }
}
</style>
