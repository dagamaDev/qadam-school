<template>
    <div>
        <enrollmentHero/>
        <div class="py-20 bg-white">
            <enrollmentInfo />
        </div>

        <div class="my-20">
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
import enrollmentInfo from '../components/enrollmentInfo.vue';
import enrollmentHero from '../components/enrollmentHero.vue';
import priceInfo from '../components/priceInfo.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
import schoolNews from '../components/schoolNews.vue';
</script> 