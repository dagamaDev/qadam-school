<template>
    <div class="bg-[#F3F5F8] flex flex-col gap-4 mb-10 p-6 rounded-xl">
        <div class="flex flex-col gap-2">
            <div class="flex flex-col md:flex-row gap-2">
                <div class="mb-2">
                    <slot></slot>
                </div>
                <div class="flex flex-col justify-center">
                    <h5 class="text-xl font-semibold text-[#E87C43] uppercase">{{ props.position }}</h5>
                    <h4 class="text-3xl font-bold">
                        {{ props.name }}
                    </h4>
                    <h5 class="text-sm">
                        {{ props.job }}
                    </h5>
                </div>
            </div>


            <div class="flex flex-col gap-2">
                <p>{{ $t('team.info.experience') }}:</p>
                <p>
                    {{ props.description }}
                </p>
            </div>

        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    position: String,
    name: String,
    job: String,
    description: String,
});
</script>