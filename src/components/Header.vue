<template>
  <div class="header">
    <h1 class="titre">Calendrier</h1>
    <div class="information">
      <span>SESSION DÉCEMBRE 2022</span>
      <div class="date">
        <span>04 déc 2022</span>-<span>19 jan 2023</span>
      </div>
      <div class="lastpart">
        <span>Total : {{ scheduleStore.formatPrice(parseInt(totalPrice)) }}</span>
        <RouterLink class="subscribeBtn" to="/" @click="logOut" v-if="connect">Déconnexion</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useScheduleStore } from "../store/Schedulestore.js";
import { storeToRefs } from "pinia";
import {useRouter} from "vue-router";

const router = useRouter()
const scheduleStore = useScheduleStore()

const { totalPrice } = storeToRefs(scheduleStore)

const connect = JSON.parse(localStorage.getItem('isConnect')).isConnect;

if(!connect){
  router.push('/')
}
const logOut = function(){
  localStorage.setItem('isConnect', JSON.stringify({isConnect: false}))
}

</script>

<style>
.titre {
  text-align: center;
  display: grid;
  place-items: center;
}

.lastpart span {
  margin-right: 10px;
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

.subscribeBtn {
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: rgba(116, 123, 255, 0.86);
  cursor: pointer;
  text-decoration: none;
}

.subscribeBtn:hover {
  background-color: #747bff;
}

.titre:after {
  content: "";
  height: 2px;
  width: 100px;
  background-color: black;
  display: block;
}

@media (width < 760px) {
  .information {
    height: 160px;
  }
}
</style>