<script setup lang="ts">
import { profile } from '~/data/resume'

const initial = profile.fullName.charAt(0)
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <a href="#top" class="brand">
        <span class="brand-mark">{{ initial }}</span>
        <span class="brand-name">{{ profile.fullName }}</span>
      </a>
      <nav class="nav" aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#approach">Approach</a>
        <a href="#contact" class="btn btn-primary nav-cta">Get in touch</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  background: color-mix(in srgb, var(--color-bg) 78%, transparent);
}

.header-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.brand {
  display: flex;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  color: var(--color-text);
}

.brand-mark {
  width: 26px;
  height: 26px;
  border-radius: var(--radius-md);
  background: linear-gradient(140deg, var(--color-accent), var(--color-accent-700));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #f5f4ff;
}

.brand-name {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav a {
  font-size: 13px;
  padding: 7px 12px;
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-neutral-400);
  transition: color 0.25s ease, background 0.25s ease;
}

.nav a:not(.nav-cta):hover {
  color: var(--color-neutral-100);
  background: color-mix(in srgb, var(--color-accent) 12%, transparent);
}

.nav-cta {
  margin-left: 8px;
  font-size: 13px;
  border-radius: var(--radius-md);
}

@media (max-width: 640px) {
  .header-inner {
    flex-wrap: wrap;
    row-gap: 8px;
  }

  .nav {
    margin-left: 0;
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
