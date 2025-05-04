<script setup>
const props = defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>

<template>
  <div class="flex items-start space-x-4">
    <div>
        <slot></slot>
    </div>
    <div>
      <h4 class="font-semibold text-black">{{ title }}</h4>
      <p class="text-sm text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>
