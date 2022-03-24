<template>
  <div class="menu-left" style="width: 200px">
    <!-- <el-icon class="is-collapse" @click="collapseHandle"><expand /></el-icon> -->
    <el-menu
      class="el-menu-vertical"
      :default-active="showMenuActive"
      :collapse="isCollapse"
      :unique-opened="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <menu-item :routesArr="routesArr"></menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import MenuItem from "./MenuItem.vue";

// 左侧菜单收缩
const isCollapse = ref(false);
// const collapseHandle = () => {
//   isCollapse.value = !isCollapse.value;
//   console.log(isCollapse.value);
// };

// 路由
const route = useRoute();
const router = useRouter();
const routesArr = router.options.routes;
console.log(route, router);
const showMenuActive = ref("/home");

onMounted(() => {
  showMenuActive.value = route.path;
});

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.menu-left {
  background-color: #f3f3f3;
}
.el-menu-vertical:not(.el-menu--collapse) {
  min-height: calc(100% - 80px);
  background-color: #f0f0f0;
}
.el-menu-vertical {
  background-color: #f0f0f0;
}
.is-collapse {
  font-size: 20px;
  padding-left: 20px;
  cursor: pointer;
}
</style>
