<template>
    <div class="absolute w-3/4 flex justify-center bg-white rounded-2xl py-4">
        <Card class="rounded-l-2xl" title="Международные стандарты" :items="[
            'IB PYP – международная учебная программа',
            'Предметы на английском языке',
            'Учителя-фасилитаторы',
        ]">
            <img class="w-6" src="../assets/frame_15.svg" alt="">
        </Card>
        
        <div class="border-l border-[#D9DEE4] h-auto"/>

        <Card title="Инновационные методы" :items="[
            'Обучение через исследования и открытый опыт',
            'Игровой формат обучения',
            'Рефлексивный дневник',
        ]">
            <img class="w-6" src="../assets/frame_16.svg" alt="">
        </Card>

        <div class="border-l border-[#D9DEE4] h-auto"/>


        <Card class="rounded-r-2xl" title="Индивидуальный подход" :items="[
            'Выявление сильных сторон ребенка',
            'Индивидуальный план развития',  
            'Благоприятная среда для роста',
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
