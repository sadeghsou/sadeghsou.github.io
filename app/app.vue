<script setup lang="ts">
import { profile, contactCards } from '~/data/resume'

useSeoMeta({
  title: `${profile.fullName} — ${profile.role}`,
  description: profile.bio,
  ogTitle: `${profile.fullName} — ${profile.role}`,
  ogDescription: profile.bio,
  ogType: 'profile',
  ogUrl: 'https://sadeghsou.tech/',
  ogImage: profile.photo.src,
  twitterCard: 'summary_large_image',
  twitterTitle: `${profile.fullName} — ${profile.role}`,
  twitterDescription: profile.bio,
  twitterImage: profile.photo.src,
})

useHead({
  link: [{ rel: 'canonical', href: 'https://sadeghsou.tech/' }],
})

useSchemaOrg([
  definePerson({
    name: profile.fullName,
    jobTitle: profile.role,
    email: profile.email,
    url: 'https://sadeghsou.tech/',
    sameAs: [profile.githubUrl, profile.linkedinUrl],
  }),
])

const { glowRef, onMove } = useCursorGlow()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="page-root" @mousemove="onMove">
      <div ref="glowRef" class="cursor-glow" aria-hidden="true" />
      <ScrollProgressBar />

      <TheHeader />

      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ApproachSection />
        <ContactSection :cards="contactCards" />
      </main>
    </div>
  </div>
</template>

<style>
.page-root {
  font-family: var(--font-body);
  color: var(--color-text);
  background:
    radial-gradient(1100px 640px at 78% -6%, #232746 0%, rgba(35, 39, 70, 0) 62%),
    radial-gradient(760px 520px at 4% 22%, #1b2036 0%, rgba(27, 32, 54, 0) 60%),
    var(--color-bg);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 460px;
  height: 460px;
  margin: -230px 0 0 -230px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(145, 132, 217, 0.16) 0%, rgba(145, 132, 217, 0) 68%);
  pointer-events: none;
  z-index: 0;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  animation: om-float 9s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .cursor-glow {
    display: none;
  }
}
</style>
