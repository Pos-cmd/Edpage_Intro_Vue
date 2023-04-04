<script setup>

import {ref} from "vue";
import {useScheduleStore} from "../store/Schedulestore.js";
import {storeToRefs} from "pinia";

const scheduleStore = useScheduleStore();
const {scheduleData} = storeToRefs(scheduleStore)

const times = ref(['18:10', '19:15', '20:25'])
const activeCourses = ref({})

const setActive = (id, time, course, date, price) => {
  if (activeCourses.value[date] && activeCourses.value[date][time] === course) {
    delete activeCourses.value[date][time];
  }else{
    activeCourses.value[date] = activeCourses.value[date] || {};
    activeCourses.value[date][time] = course;
  }
  scheduleStore.subscribe({id, date, time, course, price})
};

const isActive = (time, course, date, price) => {
  return (
      activeCourses.value[date] &&
      activeCourses.value[date][time] === course
  );
};

</script>

<template>
    <div class="schedule">
      <table class="schedule-table">
        <thead class="thead">
        <tr>
          <th>Horaire</th>
          <th v-for="date in scheduleData" >{{ date[0] }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(time, index) in times" :key="index">
          <th >{{ time }}</th>
          <td v-for="data in scheduleData">
            <div v-for="events in data">
              <ul class="events" v-for="(event , eventIndex) in events">
                <li
                    class="event"
                    v-for="course in event"
                    v-if="(eventIndex === time)"
                    :class = "{ active: isActive(time, course.name, data[0], course.price) }"
                    @click="setActive(course.id, time, course.name, data[0], course.price)"
                    >
                  {{course.name}} : {{scheduleStore.formatPrice(course.price)}}
                </li>
              </ul>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<style scoped>
table, th, td {
  border-collapse: collapse;
  border: .01px solid #ddd;
  text-align: center;
}

.schedule-table th,
.schedule-table td {
  padding: 1%;
  border: 1px solid #ddd;
  text-align: center;
}

.active{
  background-color: #3788D8 !important;
}

.thead{
  color: white;
  background: #3788D8;
}

.schedule-table{
  width: 100%;
  height: 100%;
}

.events{
  width: 100%;
  padding: 0;
}

.event{
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



.event:hover{
  background: #4c6c8b;
}

</style>