<template>
  <div id="chart-container">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
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
import { reactive } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

// TODO: modify chart to real data and color and size
const chartData = reactive({
  type: "bar",
  labels: ["may", "January"],
  datasets: [
    {
      data: [1, 2],
      backgroundColor: "#f87979",
      barPercentage: 0.2,
    },
    {
      data: [1, 2],
      backgroundColor: "#f87979",
      barPercentage: 0.2,
    },
  ],
});
const chartOptions = reactive({
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
});
</script>

<style scoped></style>
