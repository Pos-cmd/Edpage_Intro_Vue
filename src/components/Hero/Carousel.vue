<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide"></slot>

        <!-- Navigation -->
        <div class="navigate">
            <div class="toggle-page left">
                <div class="icon" @click="prevSlide">
                    <i class=" fa-solid fa-chevron-left fa-xs"></i>
                </div>
            </div>
            <div class="toggle-page right">
                <div class="icon" @click="nextSlide">
                    <i class=" fa-solid fa-chevron-right fa-xs"></i>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div class="pagination">
            <span v-for="(slide, index) in getSlideCount" :key="index" :class="{ active: index + 1 === currentSlide }"
                @click="goToSlide(index)">
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentSlide = ref(1);
const getSlideCount = ref(null)
const autoplayEnabled = ref(true)
const timeOutDuration = ref(5000)

// Next Slide
const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1
        return
    }
    currentSlide.value += 1
}

const prevSlide = () => {
    if (currentSlide.value === 1) {
        currentSlide.value = 1
        return
    }
    currentSlide.value -= 1
}

const goToSlide = (index) => {
    currentSlide.value = index + 1
}

const autoplay = () => {
    setInterval(() => {
        nextSlide()
    }, timeOutDuration.value)
}

if (autoplayEnabled.value) {
    autoplay()
}

onMounted(() => {
    getSlideCount.value = document.querySelectorAll('.slide').length
});

</script>

<style scoped>
.navigate {
    padding: 0 1rem;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

}

.toggle-page {
    display: flex;
    flex: 1;
}

.right {
    justify-content: flex-end;
}

.icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 30px;
    height: 30px;
    background-color: #63476763;
    border-radius: 50%;
    transition: background .4s ease-in;
}

.icon:hover {
    background-color: #634767bb;
}

.pagination {
    position: absolute;
    bottom: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
}

.pagination span {
    cursor: pointer;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #f5f5f57a;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.pagination span.active {
    background-color: #f5f5f5;
}
</style>