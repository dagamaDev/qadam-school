<script setup>
import schoolHeader from '../components/schoolHeader.vue';
import teamtitle from '../components/teamtitle.vue';
import missionAlso from '../components/missionAlso.vue';
import schoolNews from '../components/schoolNews.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
</script>
<template>
    <div>
        <div class="relative">
            <schoolHeader />
            <img class="w-full object-cover" src="../assets/team_banner.png" alt="School Image">
            <teamtitle />
        </div>
        <div class="my-20">
            <missionAlso />
            <schoolNews />
        </div>
        <div class="bg-white">
            <schoolQuestions class="py-20"/>
        </div>
        <div>
            <schoolFooter/>
        </div>
    </div>
</template>