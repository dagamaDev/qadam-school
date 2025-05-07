<template>
    <div class="full flex justify-center">
        <div class="w-3/4">
            <h1 class="text-4xl font-bold mb-8">{{$t('mission.aims.title')}}</h1>
            <div class="flex justify-between gap-10">
                <div>
                    <img class="mb-2 w-11 h-11" src="../assets/mission_world.svg" alt="">
                    <p>{{$t('mission.aims.improve')}}</p>
                </div>
                <div>
                    <img class="mb-2 w-11 h-11" src="../assets/mission_piece.svg" alt="">
                    <p>{{$t('mission.aims.upbringing')}}</p>
                </div>
                <div>
                    <img class="mb-2 w-11 h-11" src="../assets/mission_friend.svg" alt="">
                    <p>{{$t('mission.aims.create')}}</p>
                </div>
            </div>
        </div>
    </div>
</template>