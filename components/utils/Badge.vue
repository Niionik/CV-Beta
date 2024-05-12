<script lang="ts" setup>
const props = defineProps({
    variant: {
        type: String,
        default: 'primary'
    }
})
</script>
<template>
    <span :class="['badge', `badge--${$props.variant}`]">
        <slot />
    </span>
</template>
<style lang="scss" scoped>
.badge {
    padding: 0.25em 0.5em;
    color: var(--color-white);
    display: inline-block;
    border-radius: 50px;

    &--primary {
        background-color: var(--color-primary);
    }

    &--secondary {
        background-color: var(--color-secondary);
    }
}
</style>