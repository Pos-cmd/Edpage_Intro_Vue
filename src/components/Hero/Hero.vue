<script setup>
import Carousel from './Carousel.vue';
import Slide from './Slide.vue';

const carouselSlides = [{ img: 'salsa1', msg: "Bienvenue" }, { img: 'salsa2', msg: "Dos Con Dos" }];
const getImageUrl = (name) => {
    return new URL(`../../assets/img/${name}.webp`, import.meta.url).href
};
</script>

<template>
    <section class="hero">
        <Carousel class="carousel" v-slot="{ currentSlide }">
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info">
                    <p class="slide-text">{{ slide.msg }}</p>
                    <img :src="getImageUrl(slide.img)" :alt="slide" />
                </div>
            </Slide>
        </Carousel>
    </section>
</template>

<style scoped>
.hero {
    position: relative;
    max-height: 43.75rem;
    height: 43.75rem;
    margin-bottom: 1.5rem;
}

.slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
}

.slide-text {
    position: absolute;
    color: #f5f5f5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(.8rem, 1.5625rem + 1vw, 4rem);
    z-index: 1;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4);
}
</style>