<template>
    <div class="relative w-full h-[70vh] flex justify-center">
        <div :style="`background-image: url(${academicImage});`"
            class="absolute inset-0 w-full h-full bg-cover bg-no-repeat brightness-50 z-0"></div>

        <div class="relative z-10 w-3/4">
            <schoolHeader />
            <div class="flex">
                <div class="w-full flex flex-col justify-end text-white gap-14 md:gap-26 mt-26 py-6">
                    <div>
                        <p @click="router.go(-1)" class="hidden md:flex cursor-pointer">← {{ $t('globalWords.main') }}
                        </p>
                        <p @click="router.go(-1)" class="md:hidden flex cursor-pointer">← {{
                            $t('globalWords.main-adaptive') }}</p>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-4">
                            <h1 class="text-4xl md:text-7xl font-bold">
                                {{ $t('academic.hero.academic') }} <br />
                                {{ $t('academic.hero.program') }}
                            </h1>
                            <div class="w-full border-b border-white"></div>
                            <router-link to="/extra">
                                <div class="flex justify-between items-center">
                                    <p>{{ $t('extra.hero.title') }}</p><img src="../assets/arrow-right.svg"
                                        alt="arrow-right">
                                </div>
                            </router-link>
                            <div class="w-full border-b border-white"></div>
                            <router-link to="/orda">
                                <div class="flex justify-between items-center">
                                    <p>{{ $t('orda.info.title') }}</p>
                                    <img src="../assets/arrow-right.svg" alt="arrow-right">
                                </div>
                            </router-link>
                            <div class="w-full border-b border-white"></div>
                        </div>
                        <div class="hidden md:flex gap-2 items-center">
                            <a href="https://www.instagram.com/qadamschool?igsh=cHFneHYzYWc2cXZ5">
                                <img class="w-15 h-15" src="../assets/insta_white.svg" alt="">
                            </a>
                            <a href="https://wa.me/+77003357676">
                                <img class="w-15 h-15" src="../assets/whatsup_white.svg" alt="">
                            </a>
                                <img class="w-15 h-15" src="../assets/youtube_white.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import schoolHeader from '../components/schoolHeader.vue';
import academicImage from '../assets/academic-1.png';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>