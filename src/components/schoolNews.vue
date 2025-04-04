<template>
    <div class="w-full flex flex-col">
        <div class="w-full flex justify-center">
            <div class="w-3/4">
                <div class="flex justify-between items-center mb-8">
                    <h1 class="text-4xl font-bold">Новости</h1>
                    <button class="border border-black px-4 py-2 rounded-md">
                        Посмотреть все новости
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col items-end">
            <div class="w-7/8 flex gap-8 overflow-y">
                <newsCard >
                    <img class="w-full h-90 object-cover"   src="../assets/carousel_1.png" alt="">
                </newsCard>

                <newsCard >
                    <img class="w-full h-90 object-cover"   src="../assets/carousel_2.png" alt="">
                </newsCard>
                <newsCard >
                    <img class="w-full h-90 object-cover"   src="../assets/carousel_3.png" alt="">
                </newsCard>

                <newsCard >
                    <img class="w-full h-90 object-cover"   src="../assets/carousel_4.png" alt="">
                </newsCard>
            </div>
        </div>
    </div>
</template>
<script setup>
import newsCard from './newsCard.vue';
</script>
