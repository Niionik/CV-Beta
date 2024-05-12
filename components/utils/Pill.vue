<script lang="ts" setup>
defineProps({
    to: {
        type: String,
        required: false
    }
});
</script>

<template>
    <div v-if="!$props.to" class="pill">
        <slot />
    </div>
    <NuxtLink v-else :to="$props.to" class="pill">
        <slot />
    </NuxtLink>
</template>
<style lang="scss" scoped>
.pill {
    display: flex;
    align-items: center;
    padding: 1em;
    border-radius: 2em;
    border: 1px solid var(--color-white);
    font-size: var(--font-size-medium);
    color: var(--color-text-1);
    font-family: var(--font-family-secondary);

    @include media-up(xl) {
        font-size: var(--font-size-large);
    }
}
</style>