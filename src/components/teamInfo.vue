<template>
    <div class="w-full flex justify-center">
        <div class="w-3/4">
            <h3 class="text-2xl font-bold mb-8">Сейсенбай Шакарим</h3>
            <div class="flex gap-10 mb-10">
                <img class="w-110 h-154" src="../assets/team-main.jpg" alt="">
                <div class="flex flex-col justify-evenly gap-4 p-10">
                    <div>
                        <button
                            class="bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-md">
                            Основатель школы
                        </button>
                    </div>

                    <h4 class="text-[#E87C43] font-bold text-xl">Магистр в сфере управления образования,
                        Назарбаев Университет</h4>
                    <h3 class="text-2xl font-bold">Сейсенбай Шакарим</h3>
                    <p>Опыт:
                        Руководитель Управления образования г. Астана
                        Академический директор Astana Garden School
                        Директор школы-лицей #54
                        Работа в РФМШ, НИШ и БИЛ</p>
                </div>
            </div>
            <h1 class="text-4xl font-bold mb-4">Филиал Qadam School на Алимбаева, 21</h1>
            <div class="flex justify-between gap-20 mb-10">
                <jobCard class="w-1/2" :position="'Директор филиала'" :name="'Абитаева Малика'"
                    :job="'Магистр в сфере управления образования, Назарбаев Университет'"
                    :description="'Опыт:  MYP учитель, НИШ IB, Астана  IB DP координатор школы “Zaman”, Алматы  Заместитель директора школы “Alan”, Шымкент координатор по Сингапурской методике, Ustaz Pro'">
                    <img class="w-110 h-154" src="../assets/team-2.jpg" alt="">
                </jobCard>
                <jobCard class="w-1/2" :position="'заместитель директора'" :name="'Тенел Колбайкызы'"
                    :job="'Магистра в области лидерства в образовании,Назарбаев Университет'"
                    :description="'Опыт: Проходила профессиональную подготовку в Сингапуре Сертифицированный методист Marshall Cavendish Education Разработка программ, методическая поддержка, международные стандарты'">
                    <img class="w-110 h-154" src="../assets/team-3.jpg" alt="">
                </jobCard>
            </div>

            <h1 class="text-4xl font-bold mb-4">Филиал Qadam School на Бухар Жырау 19/1</h1>

            <div class="flex justify-between gap-20">
                <jobCard class="w-1/2" :position="'Директор филиала'" :name="'Борлыкбаева Райхан'"
                    :job="'Сертифицированный преподаватель английского языка (CELTA Pass A, 2024)'"
                    :description="'Опыт: Академический директор школы-лицей #54 Заместитель директора НИШ IB Координатор в Haileybury Astana экзаменатор программы IB DP и консультант CIS'">
                    <img class="w-110 h-154" src="../assets/team-5.jpg" alt="">
                </jobCard>
                <jobCard class="w-1/2" :position="'Заместитель директора по учебной части'"
                    :name="'Каримова Динара Тахировна '"
                    :job="'Магистра в области лидерства в образовании,Назарбаев Университет'"
                    :description="'Опыт: Обладатель сертификатов: TKT: CLIL (2022), IH Certificate in Teaching English (Distinction, 2013) English as a second language  (2007-2008 )New York учитель Social Studies  QadamSchool учитель английского языка Level Elementary-Advance, IELTS IH InterPress School учитель английского языка Лингвистическая гимназия 5 г. Астана'">
                    <img class="w-110 h-150" src="../assets/team-4.jpg" alt="">
                </jobCard>
            </div>
        </div>
    </div>
</template>
<script setup>
import jobCard from './jobCard.vue';
</script>