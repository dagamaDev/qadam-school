<template>
    <div>
        <parentsHero/>
        <div class="mt-20">
            <parentsGuidance/>
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
<script setup>
import parentsHero from '../components/parentsHero.vue';
import parentsGuidance from '../components/parentsGuidance.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
import missionAlso from '../components/missionAlso.vue';
import schoolNews from '../components/schoolNews.vue';
</script>