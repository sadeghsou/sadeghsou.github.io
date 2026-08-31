<script setup lang="ts">
  import { profile, headlineStats } from "~/data/resume";
</script>

<template>
  <section
    id="top"
    class="hero">
    <div class="hero-grid">
      <div>
        <div class="badge">
          <span class="badge-dot" />
          <span>{{ profile.availability }}</span>
        </div>
        <h1 class="headline">
          <span class="headline-line">{{ profile.firstNameLine }}</span>
          <span class="headline-line headline-accent">{{ profile.lastNameLine }}</span>
        </h1>
        <div class="rule" />
        <p class="bio">{{ profile.bio }}</p>
        <div class="cta-row">
          <a
            :href="`mailto:${profile.email}`"
            class="btn btn-primary cta-link"
            >Email me</a
          >
          <a
            :href="profile.githubUrl"
            class="btn btn-secondary cta-link"
            >GitHub</a
          >
          <a
            :href="profile.linkedinUrl"
            class="btn btn-ghost cta-link"
            >LinkedIn</a
          >
        </div>
      </div>
      <div class="portrait">
        <div
          class="portrait-glow"
          aria-hidden="true" />
        <figure class="portrait-figure lighten">
          <img
            :src="profile.photo.src"
            :alt="profile.photo.alt"
            width="480"
            height="480"
            loading="eager" />
        </figure>
      </div>
    </div>

    <div class="stats">
      <div
        v-for="stat in headlineStats"
        :key="stat.label"
        v-reveal
        class="stat-card">
        <div
          class="stat-value"
          :data-count="stat.value">
          {{ stat.value }}{{ stat.suffix }}
        </div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .hero {
    position: relative;
    z-index: 1;
    max-width: 1080px;
    margin: 0 auto;
    padding: 76px 28px 0;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 44px;
    align-items: center;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--color-accent) 32%, transparent);
    background: color-mix(in srgb, var(--color-accent) 9%, transparent);
    font-size: 12px;
    color: var(--color-accent-300);
    animation: om-fade 0.7s ease both;
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-accent);
    animation: om-pulse 2.4s ease-in-out infinite;
  }

  .headline {
    margin: 20px 0 0;
    font-size: clamp(38px, 5.4vw, 68px);
    font-weight: 500;
    line-height: 1.02;
    letter-spacing: -0.035em;
    animation: om-up 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.08s both;
  }

  .headline-line {
    display: block;
  }

  .headline-accent {
    background: linear-gradient(96deg, var(--color-accent-200), var(--color-accent) 58%, var(--color-accent-600));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .rule {
    height: 1px;
    margin: 22px 0;
    background: linear-gradient(
      90deg,
      transparent,
      color-mix(in srgb, var(--color-accent) 55%, transparent) 12%,
      color-mix(in srgb, var(--color-text) 14%, transparent) 55%,
      transparent
    );
    transform-origin: 0 50%;
    animation: om-line 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s both;
  }

  .bio {
    margin: 0;
    font-size: 16px;
    line-height: 1.66;
    max-width: 56ch;
    color: var(--color-neutral-300);
    text-wrap: pretty;
    animation: om-up 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.28s both;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 26px;
    animation: om-up 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s both;
  }

  .cta-link {
    border-radius: var(--radius-md);
    font-size: 14px;
  }

  .portrait {
    position: relative;
    animation: om-fade 1.1s ease 0.5s both;
  }

  .portrait-glow {
    position: absolute;
    inset: -18px;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(145, 132, 217, 0.28), rgba(145, 132, 217, 0) 68%);
    filter: blur(6px);
  }

  .portrait-figure {
    position: relative;
    margin: 0;
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--color-accent) 26%, transparent);
    box-shadow: var(--shadow-lg);
  }

  .portrait-figure img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    filter: saturate(0.85) contrast(1.04);
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-top: 54px;
  }

  .stat-card {
    padding: 18px 16px;
    border-radius: var(--radius-lg);
    background: color-mix(in srgb, var(--color-surface) 72%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-text) 9%, transparent);
    transition:
      transform 0.3s ease,
      border-color 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-4px);
    border-color: color-mix(in srgb, var(--color-accent) 40%, transparent);
  }

  .stat-value {
    font-size: 34px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--color-neutral-100);
  }

  .stat-label {
    margin-top: 7px;
    font-size: 12px;
    color: var(--color-neutral-500);
  }

  @media (max-width: 760px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }

    .portrait {
      max-width: 260px;
    }

    .stats {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
