<template>
  <div>users</div>
</template>
<script setup lang="ts">
import { usersData } from "@/service/user/usersList";

usersData({}).then((data) => {
  console.log(data.data, 333);
});
</script>
<style lang="scss" scoped></style>
