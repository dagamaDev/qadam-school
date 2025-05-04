<template>
    <div class="w-full flex justify-center">
        <div class="bg-white p-8 w-3/4">
            <div class="flex justify-between items-center gap-40">
                <h2 class="w-2/3 text-3xl font-bold text-black mb-2">Уникальная методика обучения</h2>
                <h3 class="text-orange-500 font-semibold uppercase text-sm">
                    Мы используем передовые методики, которые делают процесс обучения интересным, эффективным и
                    вдохновляющим
                </h3>
            </div>
            <hr class="border-gray-200 my-4" />

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-6">
                    <FeatureItem title="Обучение на английском языке с 3 класса"
                        description="Полное погружение в языковую среду">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>

                    </FeatureItem>
                    <FeatureItem title="Индивидуальный подход"
                        description="Дополнительные занятия EAP и KAP для учеников с разным уровнем знаний">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-2.svg" alt="">
                        </div>
                    </FeatureItem>
                    <FeatureItem title="Экспериментальная наука"
                        description="Обучение через практические опыты, развивающее исследовательское мышление">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>
                    </FeatureItem>
                    <FeatureItem title="Игровой формат обучения"
                        description="Сохраняет любопытство и развивает креативность">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>
                    </FeatureItem>
                </div>

                <!-- Right Column -->
                <div class="space-y-6">
                    <FeatureItem title="Самоидентичность через историю"
                        description="Понимание культурных корней и воспитание уважения к традициям">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>
                    </FeatureItem>
                    <FeatureItem title="Изучение местной и мировой культуры"
                        description="Через чтение, пересказ и интерпретацию национальных и мировых сказок и мифов">
                        <div
                            class="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                            <img class="h-8 w-8" src="../assets/academic-3.svg" alt="">
                        </div>
                    </FeatureItem>
                    <FeatureItem title="Mindfulness" description="Обучение эмоциональному интеллекту с 3 класса">
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
</script>