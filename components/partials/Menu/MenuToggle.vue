<script lang="ts" setup>

const { open, toggleOpen } = useMenu();

const onClick = () => {
    toggleOpen();
}

const buttonSize = 77;
const buttonSizePx = computed(() => {
    return buttonSize + 'px';
});

const scale = computed(() => {

    if (!window) return 1;

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const width = windowHeight > windowWidth ? windowHeight : windowWidth;

    return width / buttonSize * 4;
});

</script>
<template>
    <div>
        <button type="button" @click="onClick" :class="{ 'menu-toggle': true, open }">
            <img v-if="!open" src="~/assets/img/icon-menu.svg" alt="Otwórz menu">
            <img v-else src="~/assets/img/icon-close.svg" alt="Zamknij menu">
        </button>
    </div>
</template>
<style lang="scss" scoped>
.menu-toggle {
    position: relative;

    @include media-up(sm){
        margin: 2rem;
    }
    
    @include media-up(lg) {
        display: none;
    }

    img {
        max-width: 50%;
    }

    @media (min-width: 375px) {
        img {
            max-width: none;
        }
    }

    background-color: var(--color-secondary);
    width: v-bind(buttonSizePx);
    height: v-bind(buttonSizePx);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    padding: none;

    &:before {
        content: '';
        position: absolute;
        background-color: var(--color-secondary);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: transform 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        z-index: -1;
    }

    &.open {

       
        &:before {
            transform: scale(v-bind(scale));
        }
    }
}
</style>