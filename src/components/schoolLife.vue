<template>
    <div ref="carousel" class="w-full overflow-hidden bg-white relative">
        <div
            ref="scrollContainer"
            class="flex gap-6 transition-transform duration-700 ease-in-out"
        >
            <img class="w-1/4" src="../assets/IMG_3425.png" alt="">
            <img class="w-1/4" src="../assets/IMG_3364.png" alt="">
            <img class="w-1/4" src="../assets/IMG_3423.png" alt="">
            <img class="w-1/4" src="../assets/DSC09934.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

const scrollContainer = ref(null);
let scrollInterval;

onMounted(async () => {
    // Clone the images to create an infinite loop effect
    const container = scrollContainer.value;
    const originalContent = container.innerHTML; 
    container.innerHTML += originalContent; // Duplicate images inside the same container

    scrollInterval = setInterval(() => {
        if (container) {
            container.style.transition = "transform 0.7s ease-in-out";
            container.style.transform = `translateX(-250px)`;

            setTimeout(async () => {
                // Move first image to the end to create a seamless effect
                const firstImage = container.children[0];
                container.appendChild(firstImage);
                container.style.transition = "none"; // Disable animation for the reset
                container.style.transform = "translateX(0)";
                await nextTick(); // Wait for the next DOM update
            }, 700);
        }
    }, 2000);
});

onUnmounted(() => {
    clearInterval(scrollInterval);
});
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
</style>
