<template>
  <div>users</div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
import { usersData } from "@/service/user/usersList";
import { key } from "@/store";
const stroe = useStore(key);
console.log(stroe.state.user.username, 4343, stroe.state.user.age);

usersData({}).then((data) => {
  console.log(data.data, 333);
});
</script>
<style lang="scss" scoped></style>
