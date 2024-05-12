<script lang="ts" setup>
const scrollTop = ref(0);
const scrollDirection = ref('down');
const props = defineProps({
    isHome: Boolean
});
const router = useRouter();

onMounted(() => {
    let lastScrollTop = window.scrollY;

    updateHeaderState();

    window.addEventListener('scroll', () => {
        updateHeaderState();
    });

    function updateHeaderState() {
        scrollTop.value = window.scrollY;

        if (scrollTop.value > lastScrollTop) {
            scrollDirection.value = 'down';
        } else {
            scrollDirection.value = 'up';
        }

        lastScrollTop = window.scrollY;
    }
});

const onLogoClick = () => {
    if (router.currentRoute.value.path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        router.push('/').then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}


</script>

<template>
    <header :class="{ scrolled: scrollTop > 50, 'scrolling-up': scrollDirection == 'up', 'home': props.isHome }">
        <div class="wrapper">
            <Logo @click="onLogoClick()" />
            <MainMenuMobile />
            <MainMenuDesktop />
            <MailCTA />
            <MenuToggle class="menu-toggle" />
            <ContactCTA class="contact-cta btn--secondary" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: var(--color-white);
    background-color: var(--color-primary);
    z-index: 1200;
    transition: background-color 0.3s ease-in-out, translate 0.3s ease-in-out;

    &.home {
        background-color: transparent;
    }

    &.scrolled {
        translate: 0 -100%;

        &.scrolling-up {
            background-color: var(--color-primary);
            translate: 0 0;
        }
    }
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-right: 0;

    width: 100%;
    max-width: 1366px;
    margin: 0 auto;

    padding-left: var(--container-padding);
}

.menu-toggle {
    align-self: flex-start;

    @include media-up(lg) {
        display: none;
    }
}

.contact-cta {
    display: none;
margin: 0 1rem;
    @include media-up(lg) {
        display: block;
    }
}
</style>
