<template>
    <div class="absolute w-3/4 flex justify-evenly bg-white rounded-2xl py-4">
        <Card class="rounded-l-2xl" :title="$t('main-standarts.title-internal')" :items="[
            $t('main-standarts.text-PYP-internal'),
            $t('main-standarts.text-subjects-internal'),
            $t('main-standarts.text-teachers-internal'),
        ]">
            <img class="w-6" src="../assets/frame_15.svg" alt="">
        </Card>
        
        <div class="border-l border-[#D9DEE4] h-auto"/>

        <Card :title="$t('main-standarts.title-innovation')" :items="[
            $t('main-standarts.title-study'),
            $t('main-standarts.title-gaming'),
            $t('main-standarts.title-reflex'),
        ]">
            <img class="w-6" src="../assets/frame_16.svg" alt="">
        </Card>

        <div class="border-l border-[#D9DEE4] h-auto"/>


        <Card class="rounded-r-2xl" :title="$t('main-standarts.title-individual')" :items="[
            $t('main-standarts.title-strong'),
            $t('main-standarts.title-plan'),
            $t('main-standarts.title-growth'),
        ]">
            <img class="w-6" src="../assets/frame_17.svg" alt="">
        </Card>
    </div>
</template>

<script setup>
import Card from "./Card.vue";
</script>

<style scoped>
</style>
