<template>
  <div>
    <v-card class="bg-backgroundSecondary pa-3">
      <div class="d-flex flex-column">
        <!-- Title -->
        <p class="text-caption font-weight-bold text-faintedText">
          REVENUE REPORT
        </p>
      </div>
      <v-row class="">
        <v-col cols="6" class="pa-0 pt-5">
          <!-- Info -->
          <v-col cols="12" class="py-0">
            <p class="font-weight-bold text-h6">$12312940</p>
            <p class="text-body-2 text-faintedText">With icon</p>
          </v-col>
          <v-col cols="12" class="pb-0">
            <!-- TODO: take bg-color from chart colors -->
            <div class="d-flex align-center">
              <div class="info-bullet bg-_barSecondary mr-2"></div>
              <p class="text-body-2 text-faintedText">Earnings</p>
            </div>
          </v-col>
          <v-col cols="6" class="py-0">
            <!-- TODO: take bg-color from chart colors -->
            <div class="d-flex align-center">
              <div class="info-bullet bg-_barPrimary mr-2"></div>
              <p class="text-body-2 text-faintedText">Profit</p>
            </div>
          </v-col>
        </v-col>
        <v-col cols="6" class="pl-0 position-relative">
          <!-- Chart -->
          <div
            id="chart-container"
            :style="{ position: 'relative', height: '100%' }"
          >
            <Doughnut
              id="my-chart-id"
              :style="{ height: '100%', width: '100%' }"
              :options="options"
              :data="dataSet"
            />
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();

const primary = theme.themes.value.light.colors._barPrimary;
const lightPrimary = theme.themes.value.light.colors._barSecondary;

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import { reactive } from "vue";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataSet = reactive({
  type: "doughnut",
  datasets: [
    {
      label: ["Profit", "Expenses"],
      data: [20, 100],
      backgroundColor: [primary, lightPrimary],
      hoverOffset: 2,
    },
  ],
});

const options = {
  responsive: false,
  // maintainAspectRatio: false,
  // circumference: 300,
  cutout: "80%",
  borderRadius: 20,
  borderWidth: 0,
  plugins: {
    legend: {
      display: false,
    },
  },
};
</script>

<style scoped>
.info-bullet {
  width: 8px;
  height: 8px;
}
</style>
