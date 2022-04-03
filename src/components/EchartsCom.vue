<template>
  <div class="main" :ref="main" :id="canvasDomRef"></div>
</template>
<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted, defineProps, watch, reactive } from "vue";

const propsSet = defineProps({
  option: {
    type: Object,
    default: null,
  },
});

const canvasDomRef = "main" + Math.random();
const main = ref("main" + Math.random());

onMounted(() => {
  canvasEchart();
});

const canvasEchart = () => {
  const canvasDom =
    (document.getElementById(canvasDomRef) as HTMLElement) || main.value;
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(canvasDom);
  myChart.showLoading({
    text: "loading",
    color: "#5470c6",
    textColor: "#333333",
    maskColor: "rgba(255, 255, 255, 0.6)",
    zlevel: 0,
    fontSize: 16,
    showSpinner: true,
    spinnerRadius: 12,
    lineWidth: 3,
  });
  // 绘制图表
  myChart.setOption(propsSet.option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
  setTimeout(() => {
    myChart.hideLoading();
  }, 1000);
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 300px;
}
</style>
