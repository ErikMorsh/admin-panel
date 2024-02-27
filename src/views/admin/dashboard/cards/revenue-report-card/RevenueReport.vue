<template>
  <div>
    <v-card class="bg-backgroundSecondary pa-3">
      <div class="d-flex mb-5">
        <!-- Title -->
        <p class="text-caption font-weight-bold text-faintedText">
          REVENUE REPORT
        </p>
        <v-spacer></v-spacer>

        <!-- TODO: set last months base on today to item list -->
        <div class="select-container small-select">
          <v-select-small
            label="Select"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
          ></v-select-small>
        </div>
        <v-btn
          variant="tonal"
          color="primary"
          class="ml-2 rounded-0 text-capitalize font-weight-bold"
          size="small"
        >
          export
        </v-btn>
      </div>
      <v-row class="d-flex flex-row-reverse">
        <v-col cols="12" md="8" class="pl-0 position-relative">
          <!-- Chart -->
          <RevenueChart v-if="forceChartToRender" />
        </v-col>
        <v-col cols="12" md="4" class="pr-0">
          <!-- Info -->
          <v-col cols="12">
            <p class="font-weight-bold text-h6">$12312940</p>
            <p class="mt-2 text-capitalize text-body-2 font-weight-medium">
              totla earning
            </p>
          </v-col>
          <v-col cols="12">
            <!-- TODO: take bg-color from chart colors -->
            <div class="info-bullet-containe d-flex align-center">
              <div class="info-bullet bg-secondary mr-2"></div>
              <p class="text-body-2 text-faintedText">Earning this month</p>
            </div>
            <p class="mt-2 font-weight-bold text-h6">$12312940</p>
          </v-col>
          <v-col cols="12">
            <!-- TODO: take bg-color from chart colors -->
            <div class="info-bullet-containe d-flex align-center">
              <div class="info-bullet bg-primary mr-2"></div>
              <p class="text-body-2 text-faintedText">Expence this month</p>
            </div>
            <p class="mt-2 font-weight-bold text-h6">$12312940</p>
          </v-col>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import RevenueChart from "./RevenueChart.vue";

// Force RevenueChart to rerender after theme changed
import { useTheme } from "vuetify";
const theme = useTheme();

const themeMode = computed(() => {
  return theme.global.current.value.dark ? "dark" : "light";
});

const forceChartToRender = ref(true);
watch(themeMode, () => {
  forceChartToRender.value = false;
  setTimeout(() => {
    forceChartToRender.value = true;
  }, 10);
});
</script>

<style scoped>
.select-container {
  width: 100px;
  height: 30px;
}

.info-bullet-containe {
  margin-left: -20px;
}
.info-bullet {
  width: 8px;
  height: 8px;
}
</style>
