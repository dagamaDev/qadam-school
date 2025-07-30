<template>
    <div class="w-full flex justify-center">
        <div class="md:w-3/4 mx-8 md:mx-0 flex flex-col md:flex-row gap-8">
            <div class="w-full md:w-3/7 flex flex-col gap-4">
                <h1 class="text-4xl md:text-5xl font-bold">{{ $t("parents.title") }}</h1>
                <div class="hidden md:flex flex-col gap-4">
                    <button @click="downloadFile"
                        class="bg-gradient-to-r w-full from-orange-400 rounded-lg to-yellow-400 bg-white px-8 py-2">{{ $t("parents.download") }}</button>
                    <button @click="handleShowModal" class="border rounded-lg bg-white px-8 py-2">{{$t('main-btn')}}</button>
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
                    <button @click="downloadFile"
                        class="bg-gradient-to-r w-full from-orange-400 rounded-lg to-yellow-400 bg-white px-8 py-2">{{ $t("parents.download") }}</button>
                    <button @click="handleShowModal" class="cursor-pointer border rounded-lg bg-white px-8 py-2">{{$t('main-btn')}}</button>
                </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits();

const handleShowModal = () => {
    console.log('showModal')
    emit('showModal');
};
const downloadFile = () => {
    console.log('download')
    const lang = localStorage.getItem('lang');
    if (lang === 'ru') {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1xvn_yFe50IBrB0w54IlJkavdGUC_UF0L';
        link.download = 'document.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else if(lang === 'kz'){
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1NLrSOrIByAb-4JjmiR95GzPfeWrlDYn7/view?usp=drivesdk';
        link.download = 'document.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
</script>
