<template>
  <div class="header-wrap">
    <div class="logo-box">
      <svg-icon icon-class="logo" class-name="logo"></svg-icon>
      <span>管理系统</span>
    </div>
    <div class="box-left">
      <el-dropdown trigger="click">
        <span class="user-dropdown">
          {{ username }}
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click="loginOut">退出 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const userInfo = window.localStorage.getItem("userLogin") as string;
const username = userInfo && JSON.parse(userInfo).userinfo.username;
const loginOut = () => {
  window.localStorage.removeItem("userLogin");
  router.push("/login");
};
</script>
<style lang="scss" scoped>
.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-box {
    display: flex;
    align-items: center;
    .logo {
      width: 30px;
      height: 20px;
    }
  }
  .box-left {
    display: flex;
    align-items: center;
    cursor: pointer;
    .user-dropdown {
      color: #000;
    }
  }
}
</style>
