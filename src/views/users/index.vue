<template>
  <div>users{{ permission }}</div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "@/store";
import { usersData } from "@/service/user/usersList";
const store = useStore(key);

const permission = store.state.getUrl.permissionArr;
usersData({}).then((data) => {
  console.log(data.data, 333);
});
</script>
<style lang="scss" scoped></style>
