<template>
    <div class="w-full flex justify-center">
        <div class="w-3/4">
            <div class="flex justify-between gap-20">
                <jobCard class="w-1/2" :name="'Абитаева Малика'"
                    :job="'Магистр в сфере управления образования, Назарбаев Университет'"
                    :description="'Опыт:  MYP учитель, НИШ IB, Астана  IB DP координатор школы “Zaman”, Алматы  Заместитель директора школы “Alan”, Шымкент координатор по Сингапурской методике, Ustaz Pro'">
                    <img class="w-110" src="../assets/team-2.jpg" alt="">
                </jobCard>
                <jobCard class="w-1/2" :name="'Абитаева Малика'"
                    :job="'Магистр в сфере управления образования, Назарбаев Университет'"
                    :description="'Опыт: MYP учитель, НИШ IB, Астана  IB DP координатор школы “Zaman”, Алматы  Заместитель директора школы “Alan”, Шымкент координатор по Сингапурской методике, Ustaz Pro'">
                    <img class="w-110" src="../assets/team-2.jpg" alt="">
                </jobCard>
            </div>
        </div>
    </div>
</template>
<script setup>
import jobCard from './jobCard.vue';
</script>