<template>
    <div>
        <div class="mb-2">
            <slot></slot>
        </div>
        <div class="flex flex-col gap-2">
            <h5 class="text-xl font-semibold text-[#E87C43] uppercase">{{ props.position }}</h5>
            <h4 class="text-3xl font-bold">
                {{ props.name }}
            </h4>
            <h5 class="text-lg">
                {{ props.job }}
            </h5>
            <p>
                {{ props.description }}
            </p>
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