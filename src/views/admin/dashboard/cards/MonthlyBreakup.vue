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
    </v-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
