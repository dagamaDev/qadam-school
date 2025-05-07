<template>
    <div class="w-full flex justify-center">
        <div class="bg-white p-8 w-3/4">
            <div class="flex justify-between items-center gap-40">
                <h2 class="w-2/3 text-3xl font-bold text-black mb-2">{{ $t('academic.methods.title') }}</h2>
                <h3 class="text-orange-500 font-semibold uppercase text-sm">
                    {{ $t('academic.methods.text') }}
                </h3>
            </div>
            <hr class="border-gray-200 my-4" />

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-6">
                    <FeatureItem :title="t('academic.methods.study')"
                        :description="t('academic.methods.study-text')">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>
                    </FeatureItem>
                    <FeatureItem :title="t('academic.methods.individual')"
                        :description="t('academic.methods.individual-text')">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-2.svg" alt="">
                        </div>
                    </FeatureItem>
                    <FeatureItem :title="t('academic.methods.experiment')"
                        :description="t('academic.methods.experiment-text')">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>
                    </FeatureItem>
                    <FeatureItem :title="t('academic.methods.gaming')"
                        :description="t('academic.methods.gaming-text')">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>
                    </FeatureItem>
                </div>

                <!-- Right Column -->
                <div class="space-y-6">
                    <FeatureItem :title="t('academic.methods.self')"
                        :description="t('academic.methods.self-text')">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>
                    </FeatureItem>
                    <FeatureItem :title="t('academic.methods.culture')"
                        :description="('academic.methods.culture-text')">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>
                    </FeatureItem>
                    <FeatureItem title="Mindfulness" :description="t('academic.methods.learn')">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>
                    </FeatureItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import FeatureItem from './featureItem.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>