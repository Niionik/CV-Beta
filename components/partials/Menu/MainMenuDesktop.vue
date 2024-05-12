<script lang="ts" setup>

const { links } = useMenu();

</script>

<template>
    <nav>
        <ul>
            <li v-for=" link  in  links " :key="link.name">
                <NuxtLink :to="link.to" @click="(event, link) => {

                if (link.to.hash) {
                    event.preventDefault();
                    $lenis.scrollTo(link.to.hash);
                }
            }">
                    {{ link.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    color: var(--color-text-1);
    font-family: var(--font-family-secondary);
    padding-top: 1rem;
    padding-bottom: 1rem;

    display: none;

    @include media-up(lg) {
        display: block;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;

        a {
            --padding-x: 1em;
            position: relative;
            display: block;
            padding: var(--padding-x);
            text-transform: uppercase;

            font-size: var(--font-size-medium);

            @include media-up(xl) {
                font-size: var(--font-size-base);
            }

            svg {
                display: none;
            }

            &:after {
                content: '';
                position: absolute;
                left: var(--padding-x);
                bottom: -0.25em;
                display: block;
                width: calc(100% - (var(--padding-x) * 2));
                height: 3px;
                background-color: currentColor;
                transform: scaleX(0);
                transform-origin: center left;

                transition: transform 0.3s ease-in-out;
            }

            &.active,
            &:hover {
                &::after {
                    transform: scaleX(1);
                }
            }
        }
    }
}
</style>