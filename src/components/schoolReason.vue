<template>
    <div class="w-full flex flex-col items-center py-10 bg-white">
        <div class="w-3/4">
            <!-- Header Section -->
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-4xl font-bold">{{$t('reason.title')}} Qadam School?</h1>
                <button
                    class="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-4 py-2 rounded">
                    {{ $t('main-btn') }}
                </button>
            </div>

            <!-- Academic Program Section -->
            <div class="rounded-xl p-px bg-gradient-to-r from-orange-400 to-yellow-400 mb-4">
                <div class="flex ">
                    <div class="w-1/2 rounded-l-xl bg-gradient-to-r from-[#eaac3f] to-[#eee03c] px-6 pt-8">
                        <span class="bg-white px-3 py-1 rounded-full text-sm font-semibold">Уникальная методика</span>
                        <h3 class="text-2xl font-bold mt-4">
                            Интересное, эффективное и вдохновляющее обучение по 5 ключевым направлениям
                        </h3>
                        <button class="mt-4 border border-black px-4 py-2 rounded-md font-semibold">
                            Академическая программа
                        </button>
                        <div class="flex justify-end">
                            <img src="../assets/Clip path group.svg" alt="">
                        </div>
                    </div>


                    <ul class="w-1/2 flex flex-col gap-2 rounded-r-xl bg-white p-6">
                        <li>✦ Авторская образовательная программа</li>
                        <li>✦ EAL (English as Academic Language)</li>
                        <li>✦ 12 часов английского в неделю с 1 класса</li>
                        <li>✦ Обучение на английском языке с 3 класса</li>
                        <li>✦ Индивидуальный подход</li>
                        <li>✦ Mindfulness</li>
                        <li>✦ Игровой формат обучения</li>
                        <li>✦ Экспериментальная наука</li>
                        <li>✦ Изучение местной и мировой культуры</li>
                    </ul>
                </div>
            </div>

            <!-- Details Section -->
            <div class="bg-white flex border border-gray-300 rounded-xl py-7">
                <!-- Academic Features -->
                <div class="w-1/2 rounded-l-xl p-6  pt-8">
                    <span class="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">Дополнительное
                        обучение</span>
                    <h3 class="text-2xl font-bold mt-4">
                        <span class="text-orange-500">23 вида кружков</span> на выбор для всестороннего развития
                    </h3>
                    <button class="mt-4 border border-black px-4 py-2 rounded-md font-semibold">
                        Узнать подробнее
                    </button>
                </div>

                <div class="border-l border-[#D9DEE4] h-auto" />


                <!-- Extracurricular Features -->
                <ul class="w-1/2 rounded-r-xl p-6 flex flex-col gap-2">
                    <li>✦ Обучение с 8:00 до 17:00</li>
                    <li>✦ 4-разовое питание</li>
                    <li>✦ Спорт – футбол, баскетбол, шахматы, карате, дзюдо</li>
                    <li>✦ Искусство – изобразительное и декоративно-прикладное искусство, оригами, манифолд</li>
                    <li>✦ Музыка – вокал, домбыра, актерское мастерство</li>
                    <li>✦ Хореография – художественная гимнастика и национальные танцы</li>
                    <li>✦ Техника и IT – 3D моделирование, blind typing</li>
                    <li>✦ Самоидентичность через историю</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>