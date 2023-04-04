<script setup>

/**
 * Soumet le formulaire d'inscription.
 * @param {Event} event - L'événement de soumission du formulaire.
 * @returns {void}
 */
function submit (event) {
  const { name } = Object.fromEntries(new FormData(event.target))
  alert('Vous ête bien incrit: ' + name)
}
</script>

<template>
  <div class="contactForm">
    <div class="msg">
      <h4>NOUS ÉCRIRE</h4>
      <p>Envoyez nous vos demande</p>
    </div>
    <div class="form">
      <form action="" @submit.prevent="(event) => submit(event)">
        <div class="form-row">
          <div class="form-el">
            <input type="text" name="name" id="name" placeholder="Nom" required>
            <input type="text" name="phone" id="phone" placeholder="Telephone" required>
          </div>
          <div class="form-el">
            <input type="text" name="email" id="email" placeholder="Email" required>
            <input type="text" name="subject" id="subject" placeholder="Sujet">
          </div>
        </div>
        <div class="form-row">
          <textarea name="message" id="textarea" cols="30" placeholder="Message"></textarea>
        </div>
        <button type="submit">ENVOYER</button>

      </form>
    </div>
  </div>
</template>

<style scoped>
.contactForm {
  display: flex;
  width: 100%;
  margin-block: 5rem;
  gap: 2rem;
}

.msg {
  width: 30%;
  background-color: #060a4f;
  padding-inline: 1rem;
  color: white;
}

h4 {
  font-size: 1.5rem;
}

h4:after {
  content: "";
  background-color: white;
  width: 65px;
  margin-top: 1rem;
  display: block;
  height: 1px;
}

.form {
  width: 70%;
  background-color: #f3f1f1;
  padding: 1rem;
}

form {
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.form-row {
  height: 30%;
  justify-content: space-between;
  display: flex;
  gap: 1rem;
}

.form-el {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  align-content: space-between;
}

input {
  width: 100%;
  height: 30px;
}

textarea {
  width: 100%;
  height: 70px;
}

button {
  width: 7rem;
  border: none;
  background-color: red;
  color: #fff;
  padding: .5rem;
  cursor: pointer;
  transition: background-color .4s ease-in;
}

button:hover {
  background-color: #d30606;
}

@media screen and (width < 760px) {
  .contactForm {
    flex-wrap: wrap;
  }

  .msg {
    width: 100%;
  }

  .form {
    width: 100%;
  }
}
</style>
