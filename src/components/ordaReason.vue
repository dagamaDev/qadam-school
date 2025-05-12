<template>
    <div class="full flex justify-center">
        <div class="w-full md:w-3/4 px-4 md:px-0">
            <h1 class="text-4xl font-bold mb-8">Зачем нужна система Орда</h1>
            <p>Наша система Орда — это не просто соревнование. Это продуманная образовательная модель, которая помогает
                детям:</p>
            <div class="flex flex-col md:flex-row justify-between gap-10 my-4">
                <div class="w-1/2 p-px bg-gradient-to-r from-[#E54847] to-[#EDDF3B] rounded-lg">
                    <div class="flex gap-2 rounded-lg bg-white p-3">
                        <img class="mb-2 w-11 h-11" src="../assets/mission_world.svg" alt="">
                        <p>{{ $t('mission.aims.improve') }}</p>
                    </div>
                </div>
                <div class="w-1/2 p-px bg-gradient-to-r from-[#E54847] to-[#EDDF3B] rounded-lg">
                    <div class="flex gap-2 rounded-lg bg-white p-3">
                        <img class="mb-2 w-11 h-11" src="../assets/mission_piece.svg" alt="">
                        <p>Формировать здоровую конкуренцию, стремясь к общим целям</p>
                    </div>
                </div>

            </div>
            <div class="flex flex-col md:flex-row justify-between gap-10">

                <div class="w-1/2 p-px bg-gradient-to-r from-[#E54847] to-[#EDDF3B] rounded-lg">
                    <div class="flex gap-2 rounded-lg bg-white p-3">
                        <img class="mb-2 w-11 h-11" src="../assets/mission_friend.svg" alt="">
                        <p>{{ $t('mission.aims.create') }}</p>
                    </div>
                </div>
                <div class="w-1/2 p-px bg-gradient-to-r from-[#E54847] to-[#EDDF3B] rounded-lg">
                    <div class="flex gap-2 rounded-lg bg-white p-3">
                        <img class="mb-2 w-11 h-11" src="../assets/mission_friend.svg" alt="">
                        <p>{{ $t('mission.aims.create') }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>