<script lang="ts" setup>

const { headerHeight } = useMenu();

const headerHeightPx = computed(() => {
    return headerHeight.value + 'px';
});

</script>

<template>
    <div>
        <Header />
        <main>
            <Container>
                <slot />
            </Container>
        </main>
        <Footer />
    </div>
</template>



<style lang="scss" scoped>
header {
    &:has(+ main.page404) {
        display: none;
    }
}

main {
    --offset: 2rem;
    --navbar-height: max(112px, v-bind(headerHeightPx));
    padding-top: calc(112px + var(--offset));
    padding-bottom: var(--offset);

    @include media-up(md) {
        --offset: 3rem;
    }

    &.page404 {
        background-image: url(https://media.giphy.com/media/H4uE6w9G1uK4M/giphy.gif);
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center;

        @include media-up(md) {
            background-position: unset;
        }
    }
}
</style>

<style>
h1 {
    margin-top: 0;
}

main {
    &.page404 {
        .page {

            .title,
            .content {
                color: var(--color-white) !important;
                text-shadow: 0 2px var(--color-tertiary);
                text-align: center;
            }

            .content {
                .btn {
                    font-size: var(--font-size-large);
                    padding: 1.5em 2.5em;
                }
            }
        }
    }
}
</style>