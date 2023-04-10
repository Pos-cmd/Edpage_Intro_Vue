<script setup>

/**
 * Soumet le formulaire d'inscription.
 * @param {Event} event - L'événement de soumission du formulaire.
 * @returns {void}
 */
function submit(event) {
  const { name } = Object.fromEntries(new FormData(event.target))
  alert('Vous ête bien incrit: ' + name)
}
</script>

<template>
  <section id="contact">    
    <div class="container">
      <div class="element">
        <div class="contactForm">
          <div class="msg">
            <h4>NOUS ÉCRIRE</h4>
            <p>Envoyez nous vos demande</p>
          </div>
          <div class="form">
            <form action="" @submit.prevent="(event) => submit(event)">
              <div class="form-row">
                <div class="form-el">
                  <input id="name" type="text" name="name" placeholder="Nom" required>
                  <input id="phone" type="text" name="phone" placeholder="Telephone" required>
                </div>
                <div class="form-el">
                  <input id="email" type="text" name="email" placeholder="Email" required>
                  <input id="subject" type="text" name="subject" placeholder="Sujet">
                </div>
              </div>
              <div class="form-row">
                <textarea id="textarea" name="message" cols="30" placeholder="Message" />
              </div>
              <button type="submit">
                ENVOYER
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  background-color: #21418E;
  padding: 2.1875rem 2.5rem 1.875rem;
  color: white;
}

h4 {
  font-size: 1.875rem;
  font-family: 'Roboto Slab', seriif;
}

h4:after {
  content: "";
  background-color: white;
  width: 65px;
  margin-block: 1rem;
  display: block;
  height: 1px;
}

.form {
  width: 70%;
  background-color: #F5F5F5;
  padding: 2.375rem 2.5rem 1.875rem;
}

form {
  width: 100%;
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
}

.form-row {
  height: 30%;
  font-family: 'Opens-sans', sans-serif;
  justify-content: space-between;
  display: flex;
  gap: 1rem;
}

.form-el {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  align-content: space-between;
}

input {
  width: 100%;
  height: 30px;
  padding: .4375rem 1.25rem;
}

textarea {
  width: 100%;
  height: 70px;
  padding: .4375rem .625rem;
}

input, textarea{
  outline-color: #F5F5F5 ;
}

button {
  width: 7rem;
  border: none;
  background-color: #E50002;
  color: #fff;
  padding: .5rem;
  cursor: pointer;
  transition: background-color .4s ease-in;
}

button:hover {
  background-color: #a80046;
}

@media screen and (width < 767px) {
  .form-row{
    flex-wrap: wrap;
  }

  .form-el{
    width: 100%;
  }

  .contactForm{
    display: block;
    width: 540px;
  }

  .form, .msg{
    width: 100%;
    padding-inline: .9375rem;
  }
}
</style>
