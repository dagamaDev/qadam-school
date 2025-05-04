<template>
    <div>
        <priceHero/>
        <div class="py-20 bg-white">
            <priceInfo />
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
import priceHero from '../components/priceHero.vue';
import priceInfo from '../components/priceInfo.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
import schoolNews from '../components/schoolNews.vue';
</script> 