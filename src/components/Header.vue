<script setup>
import { ref } from 'vue';
import Navbar from './Navbar.vue';
import { RouterLink } from 'vue-router';

let showNav = ref(false);
const toggle = () => {
    showNav.value = !showNav.value
    console.log(showNav);
};
</script>

<template>
    <section id="header">
        <header class="header">
            <div :class="{overlay: true, 'dsp-none': !showNav}" @click="toggle"></div>
            <div class="logo">
                <RouterLink to="/home">
                    <img class="logo-img" src="../assets/img/logo.png" alt="Logo">
                </RouterLink>
            </div>
            <span class="burger" @click="toggle">
                <i class="fa-solid fa-bars"></i>
            </span>
            <div :class="{ nav: true, 'show-nav': showNav }">
                <navbar />
            </div>
        </header>
    </section>
</template>



<style scoped>
#header {
    text-align: center;
    padding-block: 1.5rem;
}

.burger {
    display: none;
}

.dsp-none{
    display: none;
}

.overlay {
    opacity: 1;
    position: fixed;
    top: 0;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: #00000049;
    z-index: 2;
    transition: all 300ms ease-in;
}

@media (width < 974px) {
    .burger {
        display: block;
        font-size: 35px;
        cursor: pointer;
    }

    .nav {
        height: 100%;
        background: #FFFFFF;
        position: fixed;
        top: 0;
        z-index: 3;
        right: 0;
        width: 50%;
        text-align: left;
        transform: translateX(100%);
        transition: all .4s ease-in-out;
    }

    .show-nav {
        transform: translateX(0);
        transition: all .4s ease-in-out;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 1.5rem;
    }
}
</style>