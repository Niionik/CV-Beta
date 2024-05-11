<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
const { initOnMounted } = useMenu();
const { $lenis } = useNuxtApp();

onMounted(() => {
  initOnMounted();

  function raf(time: number) {
    $lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
});

useSeoMeta({
  title: 'CV WebDeveloper Patrycja',
  description: 'Patrycja, doświadczona deweloperka, z pasją tworząca funkcjonalne i estetyczne strony internetowe. Specjalizuje się w technologiach front-endowych, ze znajomością HTML, CSS, SCSS, JavaScript oraz frameworków takich jak VUE i NUXT. Posiada również doświadczenie w pracy z bazami danych oraz w tworzeniu responsywnych i zoptymalizowanych stron. Pragnie dalej rozwijać swoje umiejętności i angażować się w ciekawe projekty.',
  ogImage: '/favicon.ico'
})
</script>

<template>
  <NuxtLayout>
    <SpeedInsights />
    <NuxtPage />
  </NuxtLayout>
</template>
