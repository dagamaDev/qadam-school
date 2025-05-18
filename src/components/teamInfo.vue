<template>
    <div class="w-full flex justify-center bg-white pt-10">
        <div class="w-full p-4 md:p-0 md:w-3/4 ">
            <h3 class="text-4xl font-bold mb-8">{{ $t('team.info.founder') }}</h3>
            <div class="w-full md:w-1/2 bg-[#F3F5F8] flex flex-col gap-4 mb-10 p-4 rounded-xl">
                <div class="flex flex-col md:flex-row justify-evenly gap-4">
                    <img class="w-1/2 rounded-xl" src="../assets/team-main.png" alt="">
                    <div class="flex flex-col justify-center">
                        <h4 class="uppercase text-[#E87C43] font-semibold text-sm">{{ $t('team.info.founder') }}</h4>
                        <h3 class="text-2xl font-bold">Сейсенбай Шакарим</h3>
                        <p>{{ $t('team.info.founder-title') }}</p>
                    </div>
                </div>
                <div class="w-full border-b border-[#D9DEE4] mb-4"></div>
                <div class="flex flex-col">
                    <p>{{ $t('team.info.experience') }}:</p>
                    <ul class="list-disc p-4">
                        <li>Руководитель Управления образования г. Астана</li>
                        <li>Академический директор Astana Garden School</li>
                        <li>Директор школы-лицей #54</li>
                        <li>Работа в РФМШ, НИШ и БИЛ</li>
                    </ul>
                </div>
            </div>
            <h1 class="text-4xl font-bold my-8">{{ $t('team.info.filial-2') }}</h1>

            <div class="flex flex-col md:flex-row justify-between gap-20">
                <jobCard class="w-full md:w-1/2" :position="t('team.info.director')" :name="'Борлыкбаева Райхан'"
                    :job="t('team.info.director-title')" :description="t('team.info.director-jobs')">
                    <img class="w-full rounded-xl" src="../assets/team-5.png" alt="">
                </jobCard>
                <jobCard class="w-full md:w-1/2" :position="t('team.info.co-study-director')"
                    :name="'Каримова Динара Тахировна'" :job="t('team.info.co-study-director-title')"
                    :description="t('team.info.co-study-director-jobs')">
                    <img class="w-full rounded-xl" src="../assets/team-4.png" alt="">
                </jobCard>
            </div>
            <h1 class="text-4xl font-bold my-8">{{ $t('team.info.filial-1') }}</h1>
            <div class="flex flex-col md:flex-row justify-between gap-20 mb-10">
                <jobCard class="w-full md:w-1/2" :position="t('team.info.director')" :name="'Абитаева Малика'"
                    :job="$t('team.info.founder-title')" :description="t('team.info.director-jobs-2')">
                    <img class="w-full rounded-xl" src="../assets/team-2.png" alt="">
                </jobCard>
                <jobCard class="w-full md:w-1/2" :position="t('team.info.co-director')" :name="'Тенел Колбайкызы'"
                    :job="t('team.info.co-director-title')" :description="t('team.info.co-director-jobs')">
                    <img class="w-full rounded-xl" src="../assets/team-3.png" alt="">
                </jobCard>
            </div>
        </div>
    </div>
</template>
<script setup>
import jobCard from './jobCard.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>