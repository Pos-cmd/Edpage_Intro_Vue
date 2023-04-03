<template>
  <h1 class="titre">Calendrier</h1>
  <div class="information">
    <span>SESSION DÉCEMBRE 2022</span>
    <div class="date">
      <span>04 déc 2022</span>-<span>19 jan 2023</span>
    </div>

    <div class="lastpart">
      <span>Total : {{scheduleStore.formatPrice(parseInt(totalPrice))}}</span>
      <RouterLink class="subscribeBtn" to="subscribe">S'inscrire</RouterLink>
    </div>
  </div>
</template>

<script setup>
import {useScheduleStore} from "../store/Schedulestore.js";
import {storeToRefs} from "pinia";

const scheduleStore = useScheduleStore()

const {totalPrice} = storeToRefs(scheduleStore)


</script>

<style>
.titre{
  text-align: center;
  display: grid;
  place-items: center;
}

.lastpart span{
  margin-right: 10px;
}

.information{
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f0f0;
  margin-block: .5rem;
  padding-inline: 1rem;
  border-radius: 5px;
}

.subscribeBtn{
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: rgba(116, 123, 255, 0.86);
  cursor: pointer;
  text-decoration: none;
}

.subscribeBtn:hover{
  background-color: #747bff;
}

.titre:after{
  content: "";
  height: 2px;
  width: 100px;
  background-color: black;
  display: block;
}
</style>