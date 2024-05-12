<template>
    <div>
        <NuxtLink to="mail:patrycja@wrzalek.dev" title="Kliknij, aby napisać wiadomość">
            <span class="label">Napisz: </span> <span class="value">patrycja@wrzalek.dev</span>
        </NuxtLink>
    </div>
</template>
<style lang="scss" scoped>
a {
    text-transform: uppercase;
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-medium);

    @media (min-width: 375px) {
        font-size: var(--font-size-base);
    }

    .label {
        display: none;

        @include media-between(sm, lg) {
            display: inline-block;
        }

        @include media-up(xxl) {
            display: inline-block;
        }
    }

    .value {
        white-space: nowrap;
    }
}
</style>