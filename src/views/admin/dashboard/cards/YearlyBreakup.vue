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
        <v-col cols="8" md="8" class="pl-0 position-relative">
          <!-- Chart -->
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.info-bullet {
  width: 8px;
  height: 8px;
}
</style>
