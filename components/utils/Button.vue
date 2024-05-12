<script lang="ts" setup>
defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: (value: string) => {
            return ['primary', 'secondary', 'light', 'dark'].includes(value);
        }
    },
    to: {
        type: String,
    }
});

</script>

<template>
    <button v-if="!$props.to" :class="[$props.variant, 'button']">
        <slot />
    </button>
    <NuxtLink v-else :to="$props.to">
        <slot />
    </NuxtLink>
</template>
<style lang="scss" scoped></style>
