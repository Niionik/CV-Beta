<script lang="ts" setup>
defineProps({
    item: {
        type: Object,
        required: true,
        default: () => ({
            icon: '',
            title: '',
            lead: '',
            content: '',
        }),
    },
});
</script>

<template>
    <article class="item">
        <img :src="item.icon" :alt="item.title" class="item__icon" />
        <h3 class="item__title">{{ item.title }}</h3>
        <p class="item__lead">{{ item.lead }}</p>
        <p>{{ item.content }}</p>
    </article>
</template>

<style lang="scss" scoped>
.item {
    &__icon {
        margin-bottom: 1rem;
    }

    &__title {
        font-size: var(--font-size-h2);
        margin: 0;

        @include media-up(xl) {
            font-size: var(--font-size-h3);
        }
    }

    &__lead {
        color: var(--color-primary);
        font-weight: 600;
    }
}
</style>