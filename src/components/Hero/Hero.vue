<script setup>
import Carousel from './Carousel.vue';
import Slide from './Slide.vue';

const carouselSlides = ['salsa1', 'salsa2'];
const getImageUrl = (name) => {
    return new URL(`../../assets/img/${name}.webp`, import.meta.url).href
};
</script>

<template>
    <section class="hero">
        <Carousel class="carousel" v-slot="{ currentSlide }">
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info">
                    <img :src="getImageUrl(slide)" :alt="slide" />
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

img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>