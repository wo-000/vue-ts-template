<template>
  <div class="home">
    <div class="echarts-wrap" ref="echartsBox">
      <echarts-com :option="optionBar"></echarts-com>
      <echarts-com :option="optionLine"></echarts-com>
      <echarts-com :option="optionPie"></echarts-com>
      <div>sa</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import EchartsCom from "@/components/EchartsCom.vue";
import {
  optionBar,
  optionLine,
  optionPie,
} from "@/views/echartsOptions/barEcharts";
</script>
<style lang="scss" scoped>
.echarts-wrap {
  display: flex;
  justify-content: space-between;
}
</style>
