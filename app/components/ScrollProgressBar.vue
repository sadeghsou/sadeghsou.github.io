<script setup lang="ts">
const barRef = ref<HTMLElement | null>(null)
useScrollProgress(barRef)
</script>

<template>
  <div ref="barRef" class="scroll-progress" aria-hidden="true" />
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-2));
  transform-origin: 0 50%;
  transform: scaleX(0);
  z-index: 60;
}
</style>
