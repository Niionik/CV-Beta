<script lang="ts" setup>
</script>

<template>
    <button type="button" class="btn btn--primary">
        Umów się
    </button>
</template>

<style lang="scss" scoped>
button {
    text-transform: uppercase;

    @include media-between(sm, md) {
        padding: 2em;
    }

    @include media-up(xxl) {
        padding: 1.5rem 2.5em;
    }
}
</style>