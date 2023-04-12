<template>
  <div class="scheduleHeader">
    <h1 class="titre">
      CALENDRIER
    </h1>
    <div class="information">
      <span class="info-item">SESSION DÉCEMBRE 2022</span>
      <div class="date info-item">
        <span>04 déc 2022</span>-<span>19 jan 2023</span>
      </div>
      <div class="lastpart">
        <button @click="totalPrice ? isModalOpen = true : ''" :class="{ noClick: (totalPrice === 0) }"
          class="subscribeBtn">
          Je m'inscris
          <span v-if="totalPrice > 0">({{ formatPrice(parseInt(totalPrice)) }})</span>
        </button>
      </div>
    </div>
  </div>
  <Teleport to="#app">
    <!-- <div class="modal-bg" v-if="isModalOpen">
      <div class="modal">
        <div class="modal-header">
          <span>Formulaire - Connexion</span>
          <button class="close-btn" @click="isModalOpen = false">X</button>
        </div>
        <div class="modal-form">
          <form action="">
            <div class="form-item">
              <label for="">Adresse Email</label>
              <div class="input-element">
                <input type="email" placeholder="Adresse Email">
                <span></span>
              </div>
            </div>
            <div class="form-item">
              <label for="">Mot de passe</label>
              <div class="input-element">
                <input type="password" placeholder="Mot de passe">
                <span></span>
              </div>
            </div>
          </form>
        </div>
        <section class="modal-info">
          <a class="info" href="#">Vous n'avez pas de compte? S'inscrire</a>
          <a class="info" href="#">Mot de passe oublié</a>
        </section>
        <div class="modal-footer">
          <span>
            <button class="btn-annuler">Annuler</button>
            <button class="btn-valider">Valider</button>
          </span>
        </div>
      </div>
    </div> -->
    <subscribe @close-modal="isModalOpen = false" v-if="isModalOpen"/>
  </Teleport>
</template>

<script setup>
import Subscribe from '../Subscribe.vue';
import { useScheduleStore } from '../../store/schedule-store.js'
import { storeToRefs } from 'pinia'
import { formatPrice } from '../../utils/index.js';
import { ref } from 'vue';

const scheduleStore = useScheduleStore()
const isModalOpen = ref(false)

const { totalPrice } = storeToRefs(scheduleStore);

</script>

<style scoped>
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
  cursor: not-allowed !important;
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

.modal-bg {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  position: fixed;
  width: 100%;
  min-width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.modal {
  position: relative;
  background: #fff;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 10px 5px 2px rgba(0, 0, 0, .1);
  width: 60%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.modal-form {
  padding-block: 2rem 1rem;
  color: grey;
}

form .form-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem;
}

form .form-item label {
  width: 150px;
}

form .form-item input {
  width: 100%;
  height: 32px;
  padding-inline: 1rem;
  border: 1px solid #9c9da0;
  border-radius: 5px;
}

form .form-item input:focus {
  outline: 1px solid #DCDFE6;
}

.modal .close-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.modal-info {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 1rem;
}

.modal .info {
  text-decoration: none;
  color: gray;
  ;
}

.modal .info:hover {
  text-decoration: underline;
}

.modal-footer span {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.modal-footer button {
  padding: .5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.btn-annuler {
  border: 1px solid #DCDFE6;
  background-color: #fff;
  transition: all .4s ease;
}

.btn-annuler:hover {
  border-color: #21418E;
  color: #21418E;
  background-color: #21428e15;
}

.btn-valider {
  border: 1px solid white;
  background-color: #21418E;
  color: white;
  transition: all .4s ease;
}

.btn-valider:hover {
  background-color: #4865b1;
}

.input-element {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@media screen and (width < 767px) {
  .information {
    justify-content: center;
    padding: .9375rem;
    height: auto;
    font-size: 1rem;
    flex-direction: column;
  }

  .info-item {
    margin-bottom: 1rem;
  }

  .subscribeBtn,
  .lastpart {
    margin-bottom: 1rem;
  }

  .modal {
    width: 90%;
  }

  form .form-item {
    align-items: flex-start;
    flex-direction: column;
  }

  .modal-info {
    margin-bottom: 1rem;
  }
}
</style>
