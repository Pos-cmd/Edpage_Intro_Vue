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
            <span v-for="slide in getSlideCount" :key="index" :class="active"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentSlide = ref(1);
const getSlideCount = ref(null)

// Next Slide
const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1
        return
    }
    currentSlide.value += 1
}

const prevSlide = () =>{
    if (currentSlide.value === 1) {
        currentSlide.value = 1
        return
    }
    currentSlide.value -= 1
}

onMounted(() => {
    getSlideCount.value = document.querySelectorAll('.slide').length
    console.log(getSlideCount.value);
})

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
</style>