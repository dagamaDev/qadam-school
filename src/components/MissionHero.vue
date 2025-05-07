<template>
    <div class="w-full h-[70vh] flex justify-center  w-3/4 bg-gradient-to-r from-[#eaac3f] to-[#eee03c]">
        <schoolHeader />
        <div class="w-4/5 flex">
            <div class="w-full flex flex-col justify-end text-white gap-40 mt-26 py-16">
                <div class="flex gap-1">
                    <p>{{ $t('globalWords.main') }}  /</p> 
                    <div>
                        <p class="border-b border-white">{{ $t('mission.hero.title') }}</p>
                        <p>{{ $t('team.hero.title') }}</p>
                        <p>{{ $t('parents.hero.title') }}</p>
                    </div>
                </div>
                <div class="flex justify-between">
                    <h1 class="text-7xl font-bold">{{ $t('mission.hero.title') }}</h1>
                    <div class="flex gap-2 items-center translate-x-full">
                        <img class="w-15 h-15" src="../assets/insta_white.svg" alt="">
                        <img class="w-15 h-15" src="../assets/whatsup_white.svg" alt="">
                        <img class="w-15 h-15" src="../assets/youtube_white.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-between">
                <img src="../assets/up.svg" alt="Question Up" />
                <img src="../assets/down.svg" alt="Question Down" />
            </div>
        </div>
    </div>
</template>
<script setup>
import schoolHeader from './schoolHeader.vue';
</script>