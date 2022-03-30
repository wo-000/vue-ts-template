<template>
  <div>system{{ permission }}</div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "@/store";
const store = useStore(key);
const permission = store.state.getUrl.permissionArr;
</script>
<style lang="scss" scoped></style>
