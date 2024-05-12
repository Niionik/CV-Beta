<script lang="ts" setup>
useHead({
    title: 'CV Patrycji Developer Wrzalek.Dev',
    meta: [
        {
            name: 'description',
            content: 'Web Developerka, oddana tworzeniu responsywnych i innowacyjnych stron internetowych. Poznaj projekty!'
        }
    ]
});

definePageMeta({
    layout: "home",
});

</script>
<template>
    <div>
        <HeroSection />
    </div>
</template>
<style lang="scss">
.home-section {
    padding: 2rem 0;
}
</style>