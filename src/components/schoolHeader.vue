<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false); // Track menu visibility

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <!-- Header -->
    <header class="absolute top-0 left-0 w-full px-8 py-6 flex items-center justify-between header">
        <button class="border border-white text-white px-4 py-2 rounded-md">
            Портал для родителей
        </button>

        <img src="../assets/logo_color_white_svg 1.svg" alt="School Logo" class="h-10">

        <div class="flex items-center gap-6 text-white">
            <p>+7 775 007 23 77</p>
            <p>RU ▼</p>
            <button @click="toggleMenu">
                <img class="w-8" src="../assets/burger.svg" alt="Menu">
            </button>
        </div>
    </header>

    <div class="z-99 fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out rounded-l-xl"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'">

        <div class="h-full flex flex-col justify-between">
            <!-- Top Section -->
            <div>
                <div class="p-6 flex justify-between items-center border-b">
                    <img src="../assets/logo-dark.svg" alt="Qadam Logo" class="h-10">
                    <button @click="toggleMenu" class="text-black text-2xl">✖</button>
                </div>

                <nav class="p-6">
                    <ul class="space-y-4 text-lg">
                        <li class="font-bold flex gap-2">
                            <img src="../assets/Polygon.svg" alt="">О школе
                        </li>
                        <li class="text-orange-500 pl-6">Миссия школы</li>
                        <li class="pl-6">Наша команда</li>
                        <li class="pl-6">Родителям</li>

                        <li class="font-bold mt-4 flex gap-2"><img src="../assets/Polygon.svg" alt="">Программа</li>
                        <li class="pl-6">Академическая программа</li>
                        <li class="pl-6">Дополнительное образование</li>
                        <li class="pl-6">Система “Орда”</li>

                        <li class="font-bold mt-4">Стоимость</li>
                        <li class="font-bold">Поступление</li>
                    </ul>
                </nav>
            </div>

            <!-- Bottom Section -->
            <div class="p-6 flex justify-between">
                <div>
                    <p class="font-bold mb-2">Телефон</p>
                    <div class="space-y-2">
                        <div class="flex gap-2">
                            <img src="../assets/phone-dark.svg" alt="">
                            <p>+7 775 007 23 77</p>
                        </div>
                        <div class="flex gap-2">
                            <img src="../assets/watsup-dark.svg" alt="">
                            <p>+7 700 335 76 76</p>
                        </div>
                    </div>
                </div>

                <div class="flex gap-4 mt-4 items-end">
                    <img class="w-10 h-10" src="../assets/Frame 84.svg" alt="">
                    <img class="w-10 h-10" src="../assets/Frame 85.svg" alt="">
                    <img class="w-10 h-10" src="../assets/Frame 86.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: rgba(0, 0, 0, 0.7);
}
</style>
