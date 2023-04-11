<template>
  <div class="schedule">
    <table class="schedule-table">
      <thead class="thead">
        <tr>
          <th>Horaire</th>
          <td class="date" v-for="(date, dateIndex) in scheduleData" :key="dateIndex">
            {{ date[0] }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(time, timeIndex) in scheduleTime" :key="timeIndex">
          <td class="heure">{{ time }}</td>
          <td class="course-cell" v-for="(data, dataIndex) in scheduleData" :key="dataIndex">
            <div v-if="Object.keys(data[1]).includes(time)">
              <div v-for="(events, eventsIndex) in data" :key="eventsIndex" v-if="Object.keys(data[1]).includes(time)">
                <ul v-for="(event, eventIndex) in events" :key="eventIndex" class="events">
                  <div v-if="(eventIndex === time)">
                    <li v-for="(course, courseIndex) in event" :key="courseIndex" class="event"
                      :class="{ active: isActive(time, course.name, data[0], course.price) }"
                      @click="setActive(course.id, time, course.name, data[0], course.price)">
                      {{ course.name }}
                      <!-- <span class="reactivation" v-if="isActive(time, course.name, data[0], course.price)">
                        <input type="checkbox" name="" id="">
                        <label for="">Réactivation</label>
                      </span> -->
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, computed } from 'vue'
import { useScheduleStore } from '../../store/schedule-store.js'
import { storeToRefs } from 'pinia'

const scheduleStore = useScheduleStore()
const { scheduleData, scheduleTime } = storeToRefs(scheduleStore)

const activeCourses = ref({})
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const mobileClass = computed(() => {
  return isMobile.value
})

onMounted(() => {
  window.addEventListener('resize', checkMobile)
  checkMobile()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

/**
 * Définit ou désactive un cours actif et abonne l'utilisateur.
 * @param {string} id - L'ID du cours.
 * @param {string} time - L'heure du cours.
 * @param {string} course - Le nom du cours.
 * @param {string} date - La date du cours.
 * @param {number} price - Le prix du cours.
 * @returns {void}
 */
const setActive = (id, time, course, date, price) => {
  if (activeCourses.value[date] && activeCourses.value[date][time] === course) {
    delete activeCourses.value[date][time]
  } else {
    activeCourses.value[date] = activeCourses.value[date] || {}
    activeCourses.value[date][time] = course
  }
  scheduleStore.subscribe({ id, date, time, course, price })
}

/**
 * Vérifie si le cours est actif pour une heure et une date spécifiques.
 * @param {string} time - L'heure du cours.
 * @param {string} course - Le nom du cours.
 * @param {string} date - La date du cours.
 * @returns {boolean} Vrai si le cours est actif, faux sinon.
 */
const isActive = (time, course, date) => {
  return (
    activeCourses.value[date] &&
    activeCourses.value[date][time] === course
  )
};

</script>

<style scoped>

.schedule{
  width: 100%;
  overflow-x: scroll;
}

table,
th,
td {
  border-collapse: collapse;
  border: .5px solid #ddd;
  text-align: center;
}

.course-cell {
  height: unset;
  font-size: 13px;
}

tbody tr {
  height: 80px;
}

.reactivation {
  background-color: #696969;
  color: #F5F5F5;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 2px;
}

.heure,
date,
th {
  font-size: 1rem;
  padding: .625rem .3125rem;
}

.date {
  padding: .625rem .3125rem;
}

.schedule-table th,
.schedule-table td {
  padding-bottom: 1%;
  border: 2px solid #c0c0c0;
  text-align: center;
  width: 12.5%;
}

.active {
  background-color: #E50002 !important;
  color: #F5F5F5;
}

.thead {
  color: white;
  background: #21418E;
}

.schedule-table {
  width: 100%;
  height: 100%;
}

.events {
  width: 100%;
  padding: 0;
  margin: 0;
}

.event {
  width: 100%;
  background: #F5F5F5;
  border-bottom: black 1px solid;
  cursor: pointer;
  padding: .3125rem .125rem;
  text-align: center;
  list-style: none;
  margin-bottom: .25rem;
}

li span {
  display: flex;
  flex-direction: column;
}

table{
  min-width: 1000px;
}

@media (width < 760px) {
  table {
    font-size: 13px;
  }
}
</style>
