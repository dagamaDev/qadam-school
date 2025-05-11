<template>
    <div class="full flex justify-center">
        <div class="w-full md:w-3/4 px-4 md:px-0">
            <h1 class="text-4xl font-bold mb-8">{{ $t('mission.aims.title') }}</h1>
            <div class="flex flex-col md:flex-row justify-between gap-10">
                <div class="p-px bg-gradient-to-r from-[#E54847] to-[#EDDF3B] rounded-lg">
                    <div class="rounded-lg bg-white p-3">
                        <img class="mb-2 w-11 h-11" src="../assets/mission_world.svg" alt="">
                        <p>{{ $t('mission.aims.improve') }}</p>
                    </div>
                </div>
                <div class="p-px bg-gradient-to-r from-[#E54847] to-[#EDDF3B] rounded-lg">
                    <div class="rounded-lg bg-white p-3">
                        <img class="mb-2 w-11 h-11" src="../assets/mission_piece.svg" alt="">
                        <p>{{ $t('mission.aims.upbringing') }}</p>
                    </div>
                </div>
                <div class="p-px bg-gradient-to-r from-[#E54847] to-[#EDDF3B] rounded-lg">
                    <div class="rounded-lg bg-white p-3">
                        <img class="mb-2 w-11 h-11" src="../assets/mission_friend.svg" alt="">
                        <p>{{ $t('mission.aims.create') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>