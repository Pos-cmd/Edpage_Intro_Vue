<template>
  <div class="schedule">
    <table class="schedule-table">
      <thead class="thead">
        <tr>
          <th>Horaire</th>
          <th v-for="(date, dateIndex) in scheduleData" :key="dateIndex">{{ date[0] }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(time, timeIndex) in times" :key="timeIndex">
          <th>{{ time }}</th>
          <td v-for="(data, dataIndex) in scheduleData" :key="dataIndex">
            <div v-for="(events, eventsIndex) in data" :key="eventsIndex">
              <ul class="events" v-for="(event, eventIndex) in events" :key="eventIndex">
                <div v-if="(eventIndex === time)">
                <li class="event" v-for="(course, courseIndex) in event" :key="courseIndex"
                  :class="{ active: isActive(time, course.name, data[0], course.price) }"
                  @click="setActive(course.id, time, course.name, data[0], course.price)">
                    <span>{{ course.name }}</span><span>{{ scheduleStore.formatPrice(course.price) }}</span>
                  </li>
                </div>
                </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScheduleStore } from '../store/Schedulestore.js'
import { storeToRefs } from 'pinia'

const scheduleStore = useScheduleStore()
const { scheduleData } = storeToRefs(scheduleStore)

const times = ref(['18:10', '19:15', '20:25'])
const activeCourses = ref({})

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
}

</script>

<style scoped>
table,
th,
td {
  border-collapse: collapse;
  border: .01px solid #ddd;
  text-align: center;
}

.schedule-table th,
.schedule-table td {
  padding: 1%;
  border: 1px solid #ddd;
  text-align: center;
  width: 70px;
}

.active {
  background-color: #3788D8 !important;
}

.thead {
  color: white;
  background: #3788D8;
}

.schedule-table {
  width: 100%;
  height: 100%;
}

.events {
  width: 100%;
  padding: 0;
}

.event {
  width: 100%;
  background: #2C3E50;
  color: white;
  border: white 1px solid;
  cursor: pointer;
  transition: background-color .3s ease-in;
  text-align: center;
  width: 95%;
  list-style: none;
  margin-inline: auto;
}

li span {
  display: flex;
  flex-direction: column;
}

.event:hover {
  background: #4c6c8b;
}

@media (width < 760px) {
  table {
    font-size: 10px;
  }
}
</style>
