<template>
    <div>
        <div>
            <slot></slot>
        </div>
        <div>
            <h4 class="text-3xl font-bold">
                {{ props.name }}
            </h4>
            <h5 class="text-2xl font-bold text-[#E87C43]">
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
    name: String,
    job: String,
    description: String,
});
</script>