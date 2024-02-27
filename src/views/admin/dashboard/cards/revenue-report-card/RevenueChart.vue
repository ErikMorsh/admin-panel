<template>
  <div id="chart-container">
    <Bar
      id="my-chart-id"
      :style="{ height: '100%', width: '100%' }"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { reactive, computed } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();

// Bar Colors
const primary = theme.themes.value.light.colors._barPrimary;
const lightPrimary = theme.themes.value.light.colors._barSecondary;
const BandW = computed(() => {
  return theme.global.current.value.colors.BandW;
});

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

// dummy data
const dummyData = [123, 254, 951, 365, 452, 475, 648, 275, 158, 900, 145, 756];
const ddPercentage: number[] = [];
const ddRestPercentage: number[] = [];
const max = dummyData.reduce((a, b) => Math.max(a, b), -Infinity);
dummyData.forEach((data) => {
  const percentage = (data * 100) / max;
  ddPercentage.push(percentage);
  ddRestPercentage.push(100 - percentage);
});

// TODO: modify chart to real data and color and size
const chartData = reactive({
  type: "bar",
  labels: [
    "may",
    "January",
    "may",
    "January",
    "may",
    "January",
    "may",
    "January",
    "may",
    "January",
    "may",
    "January",
  ],
  datasets: [
    {
      data: ddPercentage,
      backgroundColor: primary,
      barPercentage: 0.2,
    },
    {
      data: ddRestPercentage,
      backgroundColor: lightPrimary,
      barPercentage: 0.2,
    },
  ],
});
const chartOptions = reactive({
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: BandW,
      },
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      stacked: true,
      min: 0,
      max: 100,
      ticks: {
        display: false,
      },
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
      },
      border: {
        display: false,
      },
    },
  },
});
</script>

<style scoped>
#chart-container {
  height: 100%;
}
</style>
