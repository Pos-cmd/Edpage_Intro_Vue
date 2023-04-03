<template>
    <div class="loginForm">
      <h2>Login</h2>
      <form class="form" @submit.prevent="(event) => submit(event)">
        <p>
          <input type="text" id="username" name="username" placeholder="Username" required>
        </p>
        <p>
          <input type="password" id="password" name="password" placeholder="Mot de passe..." required>
        </p>
        <p>
          <button type="submit" class="btnSubmit" id="login">Se connecter</button>
        </p>
      </form>
    </div>

</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

const user = {
  name: "admin",
  password: "admin"
}

const submit = (event) => {
  const {username, password} = Object.fromEntries(new FormData(event.target))
  if(username === user.name && password===user.password){
      router.push('/')
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



.loginForm {
  background-color: #fff;
  width: 35%;
  height: 100%;
  margin: auto;
  text-align: center;
  padding:1rem;
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