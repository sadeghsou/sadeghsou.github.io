<script setup lang="ts">
import { experience } from '~/data/resume'
</script>

<template>
  <section id="work" class="experience">
    <div v-reveal class="section-heading">
      <h2>Experience</h2>
      <span class="section-note">2010 — present</span>
    </div>

    <div class="timeline">
      <div class="rail" aria-hidden="true" />

      <article
        v-for="entry in experience"
        :key="entry.company + entry.dateRange"
        v-reveal
        class="entry"
      >
        <span class="entry-dot" aria-hidden="true" />
        <div class="entry-head">
          <h3>{{ entry.company }}</h3>
          <span class="entry-role">{{ entry.role }}</span>
          <span class="entry-dates">{{ entry.dateRange }}</span>
        </div>
        <ul class="entry-bullets">
          <li v-for="bullet in entry.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.experience {
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
  margin-bottom: 34px;
}

.section-heading h2 {
  margin: 0;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.section-note {
  font-size: 13px;
  color: var(--color-neutral-500);
}

.timeline {
  position: relative;
  padding-left: 30px;
}

.rail {
  position: absolute;
  left: 5px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--color-accent), color-mix(in srgb, var(--color-accent) 12%, transparent));
}

.entry {
  position: relative;
  margin-bottom: 14px;
  padding: 20px 22px;
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--color-surface) 60%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-text) 8%, transparent);
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.entry:last-child {
  margin-bottom: 0;
}

.entry:hover {
  transform: translateX(6px);
  border-color: color-mix(in srgb, var(--color-accent) 38%, transparent);
  background: color-mix(in srgb, var(--color-surface) 92%, transparent);
}

.entry-dot {
  position: absolute;
  left: -30px;
  top: 26px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-accent) 18%, transparent);
}

.entry-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
}

.entry-head h3 {
  margin: 0;
  font-size: 19px;
  font-weight: 600;
}

.entry-role {
  font-size: 14px;
  color: var(--color-accent-300);
}

.entry-dates {
  margin-left: auto;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-accent) 14%, transparent);
  color: var(--color-accent-200);
}

.entry-bullets {
  margin: 12px 0 0;
  padding-left: 18px;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--color-neutral-300);
}
</style>
