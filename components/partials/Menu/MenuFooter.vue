<script lang="ts" setup>

const { links } = useMenu();

</script>

<template>
    <nav>
        <ul>
            <li v-for=" link  in  links " :key="link.name">
                <NuxtLink :to="link.to">
                    {{ link.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    color: var(--color-white);
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-h3);
    padding-top: 1rem;
    padding-bottom: 1rem;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        @include media-up(lg) {
            gap: 0;
        }

        a {
            --padding-x: 1em;
            position: relative;
            display: block;
            padding: var(--padding-x) 0;
            text-transform: uppercase;
            line-height: 0.6rem;

            font-size: var(--font-size-h3);

            @include media-up(lg) {
                font-size: var(--font-size-medium);
                line-height: 0.85rem;
            }

            svg {
                display: none;
            }

            &:after {
                content: '';
                position: absolute;
                left: 0;
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