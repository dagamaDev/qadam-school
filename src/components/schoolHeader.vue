<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false); // Track menu visibility

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <!-- Header -->
    <header class="absolute top-0 left-0 w-full px-10 py-6 flex items-center justify-between header">
        <button class="border border-white text-white px-4 py-2 rounded-md">
            Портал для родителей
        </button>
        <RouterLink :to="'/'">
            <img src="../assets/logo_color_white_svg 1.svg" alt="School Logo" class="h-10">
        </RouterLink>

        <div class="flex items-center gap-10 text-white">
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
                            <img src="../assets/Polygon.svg" alt="">
                            <router-link to="/about" class="hover:text-orange-500" active-class="text-orange-500">О
                                школе</router-link>
                        </li>
                        <li class="pl-6">
                            <router-link to="/mission" class="hover:text-orange-500"
                                active-class="text-orange-500">Миссия школы</router-link>
                        </li>
                        <li class="pl-6">
                            <router-link to="/team" class="hover:text-orange-500" active-class="text-orange-500">Наша
                                команда</router-link>
                        </li>
                        <li class="pl-6">
                            <router-link to="/parents" class="hover:text-orange-500"
                                active-class="text-orange-500">Родителям</router-link>
                        </li>

                        <li class="font-bold mt-4 flex gap-2">
                            <img src="../assets/Polygon.svg" alt="">
                            <router-link to="/program" class="hover:text-orange-500"
                                active-class="text-orange-500">Программа</router-link>
                        </li>
                        <li class="pl-6">
                            <router-link to="/academic" class="hover:text-orange-500"
                                active-class="text-orange-500">Академическая программа</router-link>
                        </li>
                        <li class="pl-6">
                            <router-link to="/extra" class="hover:text-orange-500"
                                active-class="text-orange-500">Дополнительное образование</router-link>
                        </li>
                        <li class="pl-6">
                            <router-link to="/orda" class="hover:text-orange-500" active-class="text-orange-500">Система
                                “Орда”</router-link>
                        </li>

                        <li class="font-bold mt-4">
                            <router-link to="/price" class="hover:text-orange-500"
                                active-class="text-orange-500">Стоимость</router-link>
                        </li>
                        <li class="font-bold">
                            <router-link to="/admission" class="hover:text-orange-500"
                                active-class="text-orange-500">Поступление</router-link>
                        </li>
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
