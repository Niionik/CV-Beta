<template>
    <div>
        <NuxtLink to="mail:patrycja@wrzalek.dev" title="Kliknij, aby napisać">
            <span class="label">Pokodujmy wspólnie </span>
            <span>- napisz, pogadamy <span class="value"></span></span>
        </NuxtLink>
    </div>
</template>
<style lang="scss" scoped>
a {
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-h3);
    color: var(--color-white);

    @media (min-width: 375px) {
        font-size: var(--font-size-base);
    }

    @include media-up(lg) {
        font-size: 20px;
    }

    .label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: var(--font-size-h2);

        @include media-up(lg) {
            font-size: var(--font-size-h3);
        }
    }

    .value {
        white-space: nowrap;
        padding-left: 0.25rem; 
    }
}
</style>