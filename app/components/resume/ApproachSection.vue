<script setup lang="ts">
import { approachCards } from '~/data/resume'
</script>

<template>
  <section id="approach" class="approach">
    <div v-reveal class="section-heading">
      <h2>How I work</h2>
    </div>
    <div class="grid">
      <div v-for="card in approachCards" :key="card.title" v-reveal class="card">
        <span class="card-mark" aria-hidden="true" />
        <h4>{{ card.title }}</h4>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approach {
  position: relative;
  z-index: 1;
  max-width: 1080px;
  margin: 0 auto;
  padding: 92px 28px 0;
}

.section-heading {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 30px;
}

.section-heading h2 {
  margin: 0;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.card {
  padding: 22px;
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--color-surface) 58%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-text) 8%, transparent);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--color-accent) 36%, transparent);
}

.card-mark {
  display: block;
  width: 28px;
  height: 3px;
  border-radius: 2px;
  background: var(--color-accent);
  margin-bottom: 14px;
}

.card h4 {
  margin: 0 0 7px;
  font-size: 16px;
  font-weight: 600;
}

.card p {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--color-neutral-400);
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
