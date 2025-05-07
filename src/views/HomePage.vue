<script setup>
import schoolHeader from '../components/schoolHeader.vue';
import heroInfo from '../components/heroInfo.vue';
import schoolQualities from '../components/schoolQualities.vue';
import schoolNews from '../components/schoolNews.vue';
import schoolReason from '../components/schoolReason.vue';
import shoolAdmissions from '../components/shoolAdmissions.vue';
import schoolLife from '../components/schoolLife.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
</script>

<template>
    <div>
        <div class="relative">
            <schoolHeader />
            <img class="w-full h-screen object-cover" src="../assets/IMG_2336.png" alt="School Image">
            <heroInfo />
        </div>
        <div class="w-full flex justify-center absolute bottom-15">
            <schoolQualities />
        </div>
        <div class="md:mt-60 mt-150">
            <schoolNews />
        </div>
        <div class="mt-20">
            <schoolReason />
        </div>
        <div class="mt-20">
            <shoolAdmissions />
        </div>
        <div class="mt-20 bg-white">
            <div>
                <schoolLife />
            </div>
            <div class="mt-20">
                <schoolQuestions />
            </div>
        </div>
        <div>
            <schoolFooter/>
        </div>
    </div>
</template>
