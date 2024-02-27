<template>
  <div>
    <div class="px-5 d-flex flex-column flex-sm-row" style="min-height: 450px">
      <RevenueReport class="w-100" />
      <div
        class="mt-5 mt-sm-0 pl-sm-5 w-50 h-100"
        :class="mobile ? 'w-100' : 'w-50'"
      >
        <YearlyBreakup class="h-50" />
        <MonthlyBreakupVue class="h-50 pt-5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MonthlyBreakupVue from "./cards/MonthlyBreakup.vue";
import YearlyBreakup from "./cards/YearlyBreakup.vue";
import RevenueReport from "./cards/revenue-report-card/RevenueReport.vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
</script>

<style scoped></style>
