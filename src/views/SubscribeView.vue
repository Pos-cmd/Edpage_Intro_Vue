<template>
  <div class="loginForm">
    <h2>Login</h2>
    <form class="form" @submit.prevent="(event) => submit(event)">
      <p>
        <input type="text" id="username" name="username" placeholder="Username" required>
        <span :class="{ err: !isValid.name, succ: isValid.name }">{{ isValid.nameMsg }}</span>
      </p>
      <p>
        <input type="password" id="password" name="password" placeholder="Mot de passe..." required>
        <span :class="{ err: !isValid.psw, succ: isValid.psw }">{{ isValid.pswMsg }}</span>


      </p>
      <p>
        <button type="submit" class="btnSubmit" id="login">Se connecter</button>
      </p>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const user = {
  name: "admin",
  password: "admin"
}

const isValid = reactive({})

/**
*Fonction qui vérifie les identifiants entrés par l'utilisateur
*@param {Event} event - Événement déclenché par la soumission du formulaire.
*@returns {void}
*/
const submit = (event) => {
  const { username, password } = Object.fromEntries(new FormData(event.target))

  if (username !== user.name) {
    isValid.name = false
    isValid.nameMsg = `Nom d'utilisateur incorrect`
  } else {
    isValid.name = true
    isValid.nameMsg = "Champ valide"
  }

  if (password !== user.password) {
    isValid.psw = false
    isValid.pswMsg = `Mot de passe incorrect`
  } else {
    isValid.psw = true
    isValid.pswMsg = "Champ valide"
  }

  if (username === user.name && password === user.password) {
    localStorage.setItem('isConnect', JSON.stringify({ isConnect: true }))
    router.push('/home')
  }
}


const isConnect = localStorage.getItem('isConnect')
if (isConnect) {
  if (JSON.parse(isConnect).isConnect) {
    router.push('/home')
  }
}

</script>

<style scoped>
h2 {
  font-weight: 300;
  text-align: center;
}

p {
  position: relative;
}

.err {
  color: red;
}

.succ {
  color: green
}

.loginForm {
  background-color: #fff;
  min-width: 300px;
  max-width: 400px;
  position: absolute;
  height: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  margin: auto;
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
}

.form {
  padding: 0 60px;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  height: 40px;
  line-height: 60px;
  border-radius: 4px;
}

input:focus {
  border-color: #3ca9e2;
}

.btnSubmit {
  border: none;
  background-color: #3ca9e2;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  padding: .5rem;
  border-radius: 5px;
  margin-block: 1rem;
}

.btnSubmit:hover {
  background-color: #329dd5;
}
</style>