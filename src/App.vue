<script setup>
import { RouterView } from 'vue-router'
import { useScheduleStore } from './store/schedule-store.js'
import LoadingView from './views/LoadingView.vue'

const scheduleStore = useScheduleStore()
scheduleStore.getSchedule()

</script>

<template>
  <loading-view v-if="scheduleStore.isLoading" />
  <RouterView v-if="!scheduleStore.isLoading" />
</template>