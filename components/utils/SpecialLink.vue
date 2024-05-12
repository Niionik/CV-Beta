<script lang="ts" setup>
defineProps({
    to: {
        type: String,
        required: false
    }
});
</script>

<template>
    <div v-if="!$props.to" class="special-links">
        <slot />
    </div>
    <NuxtLink v-else :to="$props.to" class="link">
        <slot />
    </NuxtLink>
    <span class="icon-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="white"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    </span>
</template>
<style lang="scss" scoped>
.special-links {
    justify-content: center;
}

.link {
    display: flex;
    align-items: center;
    padding: 1em;
    border-radius: 2em;
    border-bottom: 3px solid var(--color-black);
    font-size: var(--font-size-h3);
    font-family: var(--font-family-secondary);
    justify-content: center;
margin-bottom: 2rem;
    @include media-up(xl) {
        font-size: var(--font-size-large);
    }

    &:after {
        border-bottom: 3px solid currentColor;
        width: 100%;
    }

}
</style>