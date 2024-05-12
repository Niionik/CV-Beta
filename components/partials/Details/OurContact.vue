<template>
    <div>
        <NuxtLink to="mailto:patrycja@wrzalek.dev" title="Kliknij, aby napisać maila">
            <span>patrycja@wrzalek.dev</span>
        </NuxtLink>
    </div>
</template>
<style lang="scss" scoped>
a {
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-medium);
    color: var(--color-white);
    text-transform: uppercase;

    span {
        display: block;
    }

    .value {
        white-space: nowrap;
    }
}
</style>