<script lang="ts" setup>
const { $gsap } = useNuxtApp()


</script>

<template>
    <section id="hero">
        <Container class="wrapper">
            <NuxtImg class="img-mobile" src="/img/ja bez tła.png" format="webp" width="400" height="384"
                sizes="400px sm:568px" />
            <NuxtImg class="img-desktop" src="/img/ja bez tła.png" format="webp" loading="lazy" width="491"
                height="441" sizes="491px md:673px" />
            <div class="text-wrapper">
                <h1>WEB DEVELOPER
                </h1>
                <h2>Patrycja</h2>
            </div>
        </Container>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: var(--color-primary);
    color: var(--color-white);
}

.img-desktop {
    display: none;

    @include media-up(sm) {
        display: block;
    }
}

.img-mobile {
    display: block;

    @include media-up(sm) {
        display: none;
    }
}

.wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding-bottom: 2rem;
    padding-left: 0;
    padding-right: 0;

    @include media-up(sm) {
        position: relative;
        padding-top: 8rem;
        padding-bottom: 8rem;

        img {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: auto;
            z-index: 0;
        }
    }

    @include media-up(xl) {
        margin: 0 auto;
        padding-top: 12rem;
        padding-bottom: 12rem;

        img {
            left: 580px;
            right: auto;
        }
    }

}

.text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: var(--container-padding);
    padding-right: var(--container-padding);
    z-index: 1;

    @include media-up(xl) {
        gap: 2rem;
    }
}

img {
    width: 100%;
    height: auto;
    pointer-events: none;
}

h1 {
    font-size: var(--font-size-h1);
    line-height: 0.9;
    margin-top: 0;
    margin-bottom: 0;
}
</style>