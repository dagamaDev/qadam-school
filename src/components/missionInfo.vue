<template>
    <div class="w-full flex justify-center">
        <div class="w-3/4">
            <div class="flex justify-between gap-14 mb-12">
                <h2 class="text-4xl w-1/3 font-bold">
                    {{$t('mission.info.about')}} Qadam School
                </h2>
                <div class="w-2/3 flex flex-col gap-6">
                    <p class="text-xl font-bold text-[#E87C43]">{{ $t('mission.info.title') }}</p>
                    <p class="text-xl">{{ $t('mission.info.create') }}</p>
                </div>
            </div>
            <hr>
            <div class="flex justify-between gap-14 my-12">
                <h2 class="text-4xl w-1/3 font-bold">
                    {{ $t('mission.hero.title') }}
                </h2>
                <div class="w-2/3 flex flex-col gap-6">
                    <p class="text-xl">{{ $t('mission.info.teach') }}</p>
                </div>
            </div>
            <hr>
            <div class="flex justify-between gap-14 my-12">
                <h2 class="text-4xl w-1/3 font-bold">
                    {{ $t('mission.info.vision') }}
                </h2>
                <div class="w-2/3 flex flex-col gap-6">
                    <p class="text-xl">{{ $t('mission.info.become') }}</p>
                </div>
            </div>
        </div>

    </div>
</template>