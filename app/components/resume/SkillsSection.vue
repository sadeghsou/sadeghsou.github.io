<script setup lang="ts">
import { skillGroups } from '~/data/resume'

const activeId = ref(skillGroups[0]!.id)
const activeGroup = computed(() => skillGroups.find((g) => g.id === activeId.value) ?? skillGroups[0]!)
</script>

<template>
  <section id="skills" class="skills">
    <div v-reveal class="section-heading">
      <h2>Skills</h2>
      <span class="section-note">Pick a layer of the stack</span>
    </div>

    <div v-reveal class="tabs" role="tablist" aria-label="Skill groups">
      <button
        v-for="group in skillGroups"
        :key="group.id"
        type="button"
        role="tab"
        class="tab"
        :class="{ 'tab-active': group.id === activeId }"
        :aria-selected="group.id === activeId"
        @click="activeId = group.id"
      >
        {{ group.name }}
      </button>
    </div>

    <div v-reveal class="panel">
      <div class="panel-head">
        <h3>{{ activeGroup.name }}</h3>
        <p>{{ activeGroup.note }}</p>
      </div>

      <!--
        Every group's items are rendered in the DOM (v-show, not v-if) so
        they exist as static text in the crawled/no-JS HTML; only the
        active group is visually shown.
      -->
      <div
        v-for="group in skillGroups"
        :key="group.id"
        class="chips"
        role="tabpanel"
        v-show="group.id === activeId"
      >
        <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
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
  margin-bottom: 22px;
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

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tab {
  font: inherit;
  font-size: 13.5px;
  cursor: pointer;
  padding: 9px 15px;
  border-radius: 999px;
  transition: all 0.25s ease;
  background: transparent;
  border: 1px solid color-mix(in srgb, var(--color-text) 14%, transparent);
  color: var(--color-neutral-400);
}

.tab-active {
  background: color-mix(in srgb, var(--color-accent) 22%, transparent);
  border: 1px solid var(--color-accent);
  color: var(--color-accent-100);
}

.panel {
  margin-top: 20px;
  padding: 26px;
  border-radius: var(--radius-lg);
  background: linear-gradient(
    140deg,
    color-mix(in srgb, var(--color-surface) 86%, transparent),
    color-mix(in srgb, var(--color-bg) 70%, transparent)
  );
  border: 1px solid color-mix(in srgb, var(--color-text) 9%, transparent);
  box-shadow: var(--shadow-md);
}

.panel-head {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 18px;
}

.panel-head h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-neutral-100);
}

.panel-head p {
  margin: 0;
  font-size: 13.5px;
  color: var(--color-neutral-400);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 8px 13px;
  border-radius: 999px;
  font-size: 13.5px;
  color: var(--color-neutral-200);
  background: color-mix(in srgb, var(--color-accent) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-accent) 26%, transparent);
}
</style>
