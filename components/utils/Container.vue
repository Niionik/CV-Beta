<script lang="ts" setup>
defineProps({
    size: {
        type: String,
        default: 'lg',
    },
});
</script>
<template>
    <div :class="['container', 'container--' + $props.size]">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: var(--container-max-width-lg);
    width: 100%;
    margin: 0 auto;
    padding-left: var(--container-padding);
    padding-right: var(--container-padding);

    @each $sizeName, $value in $container-sizes {
        &--#{$sizeName} {
            max-width: var(--container-max-width-#{$sizeName});
        }
    }
}
</style>