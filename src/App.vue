<script setup>
import { RouterView } from 'vue-router'
import { useScheduleStore } from './store/Schedulestore.js'
import ScheduleLoading from './components/ScheduleLoading.vue'

const scheduleStore = useScheduleStore()
scheduleStore.getSchedule()

</script>

<template>

  <div class="container">
    <div class="element">
      <ScheduleLoading v-if="scheduleStore.isLoading"/>
      <RouterView v-if="!scheduleStore.isLoading" />
    </div>
  </div>

</template>

<style scoped>

.container{
  max-width: 1440px;
  margin: auto;
}

.element{
  margin-inline: auto;
  width: 90%;
}

</style>
