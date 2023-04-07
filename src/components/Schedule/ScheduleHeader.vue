<template>
  <div class="scheduleHeader">
    <h1 class="titre">
      CALENDRIER
    </h1>
    <div class="information">
      <span>SESSION DÉCEMBRE 2022</span>
      <div class="date">
        <span>04 déc 2022</span>-<span>19 jan 2023</span>
      </div>
      <div class="lastpart">
        <RouterLink v-if="connect" :class="{ noClick: (totalPrice === 0) }" class="subscribeBtn" to="/" @click="logOut">
          Déconnexion
          <span v-if="totalPrice > 0">({{ formatPrice(parseInt(totalPrice)) }})</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useScheduleStore } from '../../store/schedule-store.js'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { formatPrice } from '../../utils/index.js';
import { ref } from 'vue';
const router = useRouter()
const scheduleStore = useScheduleStore()

const { totalPrice } = storeToRefs(scheduleStore)

const p = totalPrice > 0 ? true : false
const havePrice = ref(p)

const connect = JSON.parse(localStorage.getItem('isConnect')).isConnect

if (!connect) {
  router.push('/')
}
const logOut = function () {
  localStorage.setItem('isConnect', JSON.stringify({ isConnect: false }))
};

</script>

<style>
.titre {
  text-align: center;
  display: grid;
  font-size: 1.875rem;
  place-items: center;
  font-family: 'Roboto Slab', serif;
}

.titre:after {
  content: "";
  height: 1px;
  width: 100px;
  margin-block: 1rem;
  background-color: black;
  display: block;
}

.scheduleHeader {
  font-size: .875rem;
}

.lastpart span {
  margin-right: 10px;
}

.noClick {
  background-color: #90A0C7 !important;
}

.information {
  display: flex;
  width: 100%;
  height: 60px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f0f0;
  margin-block: .5rem;
  padding-inline: 1rem;
  border-radius: 5px;
}

.noClick {
  cursor: none;
  color: #90A0C7;
}

.subscribeBtn {
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #21418E;
  cursor: pointer;
  text-decoration: none;
}



@media (width < 760px) {
  .information {
    height: 160px;
  }
}
</style>
