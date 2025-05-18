<template>
    <div class="w-full flex justify-center">
        <div class="w-3/4 flex flex-col md:flex-row gap-8">
            <div class="w-full md:w-3/7 flex flex-col gap-4">
                <h1 class="text-4xl md:text-5xl font-bold">{{ $t("parents.title") }}</h1>
                <div class="hidden md:flex flex-col gap-4">
                    <button
                        class="bg-gradient-to-r w-full from-orange-400 rounded-lg to-yellow-400 bg-white px-8 py-2">{{ $t("parents.download") }}</button>
                    <button class="border rounded-lg bg-white px-8 py-2">{{$t('main-btn')}}</button>
                </div>
            </div>
            <div class="w-full md:w-4/7 class flex flex-col gap-4">
                <h3 class="text-2xl font-bold">{{ $t("parents.info.title") }}!</h3>
                <p>{{ $t("parents.info.communication") }}</p>
                <p class="text-[#E87C43] uppercase font-bold">{{ $t("parents.info.guidance") }}</p>
                <p>{{ $t("parents.info.text") }}</p>
                <p>{{ $t("parents.info.read") }}</p>
            </div>
            <div class="flex md:hidden flex-col gap-2">
                    <button
                        class="bg-gradient-to-r w-full from-orange-400 rounded-lg to-yellow-400 bg-white px-8 py-2">{{ $t("parents.download") }}</button>
                    <button class="border rounded-lg bg-white px-8 py-2">{{$t('main-btn')}}</button>
                </div>
        </div>
    </div>
</template>