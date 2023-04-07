<script setup>
    import Navbar from './Navbar.vue';
    import { RouterLink } from 'vue-router';
</script>


<template>
    <section class="header" id="header">
        <header>
            <div class="logo">
                <RouterLink to ="/home">
                    <img class="logo-img" src="../assets/img/logo.png" alt="Logo">
                </RouterLink>
            </div>
            <div class="nav">
                <navbar />
            </div>
        </header>
    </section>
</template>

<style scoped>
    .header{
        text-align: center;
        padding-block: 1.5rem;
    }
</style>