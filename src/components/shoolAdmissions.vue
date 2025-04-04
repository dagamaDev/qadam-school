<template>
    <div class="w-full flex justify-center">
        <div class="w-3/4">
            <div class="flex justify-between items-center pb-4 border-b border-gray-300">
                <h1 class="text-4xl font-bold">
                    Как поступить в <span class="text-orange-500">Qadam School?</span>
                </h1>
                <button class="border border-black px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
                    Узнать подробнее
                </button>
            </div>
            <div class="grid grid-cols-4 gap-4 mt-6">
                <div v-for="(step, index) in steps" :key="index" class="text-start">
                    <span class="px-3 py-1 bg-gradient-to-r from-orange-400 to-yellow-400 items-center justify-center text-3xl font-bold bg-yellow-500 rounded-full">
                        {{ index + 1 }}
                    </span>
                    <h2 class="font-bold mt-4">{{ step.title }}</h2>
                    <p class="text-gray-600 mt-3">{{ step.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const steps = [
    {
        title: "Подача заявки",
        description: "Оставьте свои контактные данные на сайте или позвоните нам",
    },
    {
        title: "Тестирование и собеседование",
        description: "Менеджер организует удобное время для тестирования или собеседования",
    },
    {
        title: "Документы и оплата",
        description: "Подайте документы и внесите оплату",
    },
    {
        title: "Поступление",
        description: "Получите приглашение и станьте частью Qadam School",
    }
];
</script>

<style scoped>
</style>
