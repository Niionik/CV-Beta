<script lang="ts" setup>

const { open, headerHeight } = useMenu();

const headerHeightPx = computed(() => {
    return headerHeight.value + 'px';
});

const { links } = useMenu();

const onLinkClick = () => {
    open.value = false;
};

onMounted(() => {
    watch(open, async (newValue) => {
        if (newValue) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    });
});

</script>

<template>
    <div :class="{ 'main-menu': true, open }">
        <nav>
            <ul>
                <li v-for=" link  in  links " :key="link.name">
                    <NuxtLink :to="link.to" @click.native="onLinkClick()">
                        {{ link.name }}
                        <span class="icon-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </NuxtLink>
                </li>
            </ul>
        </nav>

        <ContactCTA class="cta" />

        <Socials class="socials" />

    </div>
</template>

<style lang="scss" scoped>
.main-menu {

    @include media-up(lg) {
        display: none;
    }

    font-family: var(--font-family-secondary);
    z-index: 2;
    position: fixed;
    top: 77px;

    @include media-up(lg) {
        top: 79px;
    }

    @include media-up(xl) {
        top: 86px;
    }

    left: 0;
    width: 100%;
    height: auto;
    color: var(--color-white);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-bottom: 4rem;

    overflow-y: auto;

    opacity: 0;
    pointer-events: none;

    @include media-up(sm) {
        height: calc(100vh - v-bind(headerHeightPx));
    }

    nav,
    .button{
        opacity: 0;

        img {
            width: 100%;
        }
    }

    &.open {
        opacity: 1;
        pointer-events: all;
margin-top: 3rem;
        nav,
        .cta{
            animation: fadeInUp 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) both;
        }

        nav {
            animation-delay: 0.2s;
        }

        .cta {
            animation-delay: 0.4s;
        }

        
    }
}

nav {
    width: 100%;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
        text-transform: uppercase;
        padding: 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // border-bottom: 3px solid currentColor;
        font-size: var(--font-size-h2);

        svg {
            width: 20px;
            height: 24px;
        }
    }

    li {
        &:first-child {
            a {
                border-top: 3px solid currentColor;
            }
        }
    }
}

.cta {
    padding: 2em 2em;
    border-radius: 100px;
    text-transform: uppercase;
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>