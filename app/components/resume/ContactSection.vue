<script setup lang="ts">
  import { profile } from "~/data/resume";
  import type { ContactCard } from "~/data/resume";

  defineProps<{ cards: ContactCard[] }>();

  const year = new Date().getFullYear();
</script>

<template>
  <section
    id="contact"
    class="contact">
    <div
      v-reveal
      class="panel">
      <div
        class="panel-glow"
        aria-hidden="true" />
      <div class="panel-content">
        <h2>Let's talk about your frontend</h2>
        <p>Available for senior frontend and lead roles, remote or Tehran-based. I usually reply within a day.</p>
        <div class="cards">
          <a
            v-for="card in cards"
            :key="card.label"
            :href="card.href"
            class="card">
            <span class="card-label">{{ card.label }}</span>
            <span class="card-value">{{ card.value }}</span>
          </a>
        </div>
      </div>
    </div>
    <footer class="footer">
      <span>{{ profile.location }}</span>
      <span class="footer-copy">© {{ year }} {{ profile.fullName }}</span>
    </footer>
  </section>
</template>

<style scoped>
  .contact {
    position: relative;
    z-index: 1;
    max-width: 1080px;
    margin: 0 auto;
    padding: 92px 28px 60px;
  }

  .panel {
    position: relative;
    overflow: hidden;
    padding: 44px 40px;
    border-radius: var(--radius-lg);
    background: linear-gradient(135deg, #22264a, #1a1d31 62%);
    border: 1px solid color-mix(in srgb, var(--color-accent) 26%, transparent);
    box-shadow: var(--shadow-lg);
  }

  .panel-glow {
    position: absolute;
    right: -80px;
    top: -90px;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(145, 132, 217, 0.24), rgba(145, 132, 217, 0) 70%);
    animation: om-float 11s ease-in-out infinite;
  }

  .panel-content {
    position: relative;
  }

  .panel-content h2 {
    margin: 0 0 10px;
    font-size: clamp(26px, 3.4vw, 40px);
    font-weight: 500;
    letter-spacing: -0.03em;
    max-width: 24ch;
  }

  .panel-content > p {
    margin: 0 0 30px;
    font-size: 15.5px;
    line-height: 1.65;
    max-width: 52ch;
    color: var(--color-neutral-300);
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    max-width: 720px;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 16px;
    border-radius: var(--radius-md);
    text-decoration: none;
    background: color-mix(in srgb, var(--color-surface) 70%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-text) 10%, transparent);
    transition:
      transform 0.25s ease,
      border-color 0.25s ease;
  }

  .card:hover {
    transform: translateY(-3px);
    border-color: color-mix(in srgb, var(--color-accent) 45%, transparent);
  }

  .card-label {
    font-size: 12px;
    color: var(--color-neutral-500);
  }

  .card-value {
    font-size: 14.5px;
    color: var(--color-neutral-100);
  }

  .footer {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 26px;
    font-size: 12.5px;
    color: var(--color-neutral-600);
  }

  .footer-copy {
    margin-left: auto;
  }

  @media (max-width: 640px) {
    .cards {
      grid-template-columns: 1fr;
    }

    .footer {
      flex-wrap: wrap;
    }

    .footer-copy {
      margin-left: 0;
    }
  }
</style>
