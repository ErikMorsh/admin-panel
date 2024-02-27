<template>
  <div>
    <v-row>
      <v-col cols="12" class="px-5">
        <v-col cols="12" sm="8">
          <RevenueReport />
        </v-col>
        <v-col cols="12" sm="4" class=""> </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import RevenueReport from "./cards/revenue-report-card/RevenueReport.vue";
</script>

<style scoped></style>
