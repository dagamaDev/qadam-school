<template>
    <div class="w-full flex flex-col">
        <!-- Header Section -->
        <div class="w-full flex justify-center">
            <div class="w-3/4">
                <div class="flex justify-between items-center mb-8">
                    <h1 class="text-4xl font-bold">{{ $t('news.title') }}</h1>
                    <button class="hidden md:block border border-black px-4 py-2 rounded-md">
                        {{ $t('news.all') }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Carousel Section -->
        <div class="w-full flex justify-center">
            <div class="w-3/4 relative">
                <!-- Left Arrow -->
                <div class="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 p-2">
                    <button @click="scrollLeft"
                        class="  z-10 bg-white p-2 px-3  shadow-md rounded-full text-xl">
                        ‹
                    </button>
                </div>

                <!-- Scrollable container -->
                <div ref="carousel" class="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar">
                    <newsCard>
                        <img class="w-full h-96 rounded-t-xl object-cover" src="../assets/carousel_1.png" alt="">
                    </newsCard>
                    <newsCard>
                        <img class="w-full h-96 object-cover rounded-t-xl" src="../assets/carousel_2.png" alt="">
                    </newsCard>
                    <newsCard>
                        <img class="w-full h-96 object-cover rounded-t-xl" src="../assets/carousel_3.png" alt="">
                    </newsCard>
                    <newsCard>
                        <img class="w-full h-96 object-cover rounded-t-xl" src="../assets/carousel_4.png" alt="">
                    </newsCard>
                    <newsCard>
                        <img class="w-full h-96 object-cover rounded-t-xl" src="../assets/carousel_3.png" alt="">
                    </newsCard>
                    <newsCard>
                        <img class="w-full h-96 object-cover rounded-t-xl" src="../assets/carousel_4.png" alt="">
                    </newsCard>
                </div>

                <!-- Right Arrow -->
                <div class="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 p-2">

                <button @click="scrollRight"
                    class="z-10 bg-white p-2 px-3 shadow-md rounded-full text-xl">
                    ›
                </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import newsCard from './newsCard.vue'

const carousel = ref(null)

const scrollLeft = () => {
    carousel.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
    carousel.value.scrollBy({ left: 300, behavior: 'smooth' })
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>