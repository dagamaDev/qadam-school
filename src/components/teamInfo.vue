<template>
    <div class="w-full flex justify-center">
        <div class="w-3/4">
            <h3 class="text-2xl font-bold mb-8">{{ $t('team.info.founder') }}</h3>
            <div class="flex gap-10 mb-10">
                <img class="w-110 h-154" src="../assets/team-main.jpg" alt="">
                <div class="flex flex-col justify-evenly gap-4 p-10">
                    <div>
                        <button
                            class="bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-md">
                            {{ $t('team.info.founder') }}
                        </button>
                    </div>
                    <h4 class="text-[#E87C43] font-bold text-xl">{{ $t('team.info.founder-title') }}</h4>
                    <h3 class="text-2xl font-bold">Сейсенбай Шакарим</h3>
                    <div class="flex flex-col gap-2">
                        <p>{{ $t('team.info.experience') }}:</p>
                        <p>{{ $t('team.info.founder-jobs') }}</p>
                    </div>
                </div>
            </div>
            <h1 class="text-4xl font-bold my-8">{{ $t('team.info.filial-1') }}</h1>
            <div class="flex justify-between gap-20">
                <jobCard class="w-1/2" :position="t('team.info.director')" :name="'Борлыкбаева Райхан'"
                    :job="t('team.info.director-title')" :description="t('team.info.director-jobs')">
                    <img class="w-110 h-154" src="../assets/team-5.jpg" alt="">
                </jobCard>
                <jobCard class="w-1/2" :position="t('team.info.co-study-director')" :name="'Каримова Динара Тахировна'"
                    :job="t('team.info.co-study-director-title')"
                    :description="t('team.info.co-study-director-jobs')">
                    <img class="w-110 h-150" src="../assets/team-4.jpg" alt="">
                </jobCard>
            </div>
            <h1 class="text-4xl font-bold my-8">{{ $t('team.info.filial-2') }}</h1>
            <div class="flex justify-between gap-20 mb-10">
                <jobCard class="w-1/2" :position="t('team.info.director')" :name="'Абитаева Малика'"
                    :job="$t('team.info.founder-title')"
                    :description="t('team.info.director-jobs-2')">
                    <img class="w-110 h-154" src="../assets/team-2.jpg" alt="">
                </jobCard>
                <jobCard class="w-1/2" :position="t('team.info.co-director')" :name="'Тенел Колбайкызы'"
                    :job="t('team.info.co-director-title')"
                    :description="t('team.info.co-director-jobs')">
                    <img class="w-110 h-154" src="../assets/team-3.jpg" alt="">
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