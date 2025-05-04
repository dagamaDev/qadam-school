<template>
    <div>
        <AcademicHero/>
        <div class="bg-white">
            <academicInfo/>
        </div>
        <div class="my-20">
            <academicDirection />
        </div>
        <div class="bg-white">
            <academicMethod/>
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
import academicDirection from '../components/academicDirection.vue';
import AcademicHero from '../components/AcademicHero.vue';
import academicMethod from '../components/academicMethod.vue';
import academicInfo from '../components/academicInfo.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
import schoolNews from '../components/schoolNews.vue';
</script>