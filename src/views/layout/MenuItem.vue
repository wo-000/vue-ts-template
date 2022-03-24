<template>
  <!-- 递归组件 -->
  <template v-for="item in routesArr" :key="item.path">
    <el-sub-menu
      v-if="item.children && item.children.length > 0"
      :index="item.path"
    >
      <template #title>
        <el-icon><component :is="item.meta.icon" /></el-icon>
        <span> {{ item.meta?.title }}</span>
      </template>
      <menu-item :routesArr="item.children"></menu-item>
    </el-sub-menu>
    <template v-else>
      <el-menu-item
        v-if="!item.hidden"
        @click="jumpRouter(item.path)"
        :index="item.path"
      >
        {{ item.meta?.title }}
      </el-menu-item>
    </template>
  </template>
  <!--  <menu-item :routesArr="item.children"></menu-item> -->
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";
defineProps(["routesArr"]);
// 路由
const router = useRouter();
const jumpRouter = (url: string) => {
  router.push(url);
};
</script>
<style lang="scss" scoped></style>
