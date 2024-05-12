<script lang="ts" setup>
import accordionBg from '~/assets/img/github-logo-vector.svg';

const props = defineProps({
    open: Boolean,
    id: String
});

const collapse = ref<HTMLElement | null>(null);
const body = ref<HTMLElement | null>(null);

const internalOpen = ref(props.open);

const onClickHeader = () => {
    internalOpen.value = !internalOpen.value;

    document.dispatchEvent(new CustomEvent('collapse:toggle', {
        detail: {
            id: props.id
        }
    }));

    if (internalOpen.value && collapse.value) {

        collapse.value.addEventListener('transitionend', () => {

            if (!collapse.value) {
                return;
            }

            if (window.innerWidth < 768) {
                window.scrollTo({
                    top: collapse.value.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }, {
            once: true
        })
    }
};

const bodyHeight = ref('0px');

onMounted(() => {
    if (body.value) {
        bodyHeight.value = body.value.scrollHeight + "px";
    }

    window.addEventListener('resize', () => {
        if (body.value) {
            bodyHeight.value = body.value.scrollHeight + "px";
        }
    });

    document.addEventListener('collapse:hide', (event: any) => {
        if (event.detail.id === props.id) {
            internalOpen.value = false;
        }
    });

    document.addEventListener('collapse:show', (event: any) => {
        if (event.detail.id === props.id) {
            internalOpen.value = true;
        }
    });
});

const accordionBgUrl = computed(() => {
    return `url(${accordionBg})`;
});

</script>
<template>
    <div :class="{ collapse: true, open: internalOpen }" :id="props.id" ref="collapse">
        <div class="heading" @click.prevent="onClickHeader()">
            <Container>
                <h2 class="title">
                    <slot name="title"></slot>
                    <IconArrowUp :class="{ icon: true, rotate: !internalOpen }" />
                </h2>
            </Container>
        </div>
        <div class="body" ref="body">
            <div class="content">
                <slot name="content"></slot>

                <div class="cta">
                    <slot name="cta"></slot>
                </div>
            </div>
            <div class="image">
                <slot name="image"></slot>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.collapse {

    --padding-x: 1rem;
    --padding-y: 1rem;

    @include media-up(lg) {
        --padding-x: 4rem;
        --padding-y: 3rem;
    }

    background-color: var(--color-gray-100);
    background-size: 140%;
    background-repeat: no-repeat;
    background-position: 60% 200%;
    position: relative;
    overflow: hidden;

    transition: background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
    margin-bottom: 1rem;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 120%;
        height: 280px;
        background-image: v-bind(accordionBgUrl);
        background-size: cover;
        z-index: 0;
        pointer-events: none;
        opacity: 0;

        @include media-up(md) {
            width: 50%;
            height: 180%;
            bottom: 50%;
            transform: translateY(50%);
        }
    }

    .body {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        z-index: 1;
        height: 0;
        overflow: hidden;
        transition: height 0.3s ease-in-out;
        padding: 0 var(--padding-x);

        @include media-up(md) {
            max-width: 60%;
        }

        @include media-up(lg) {
            max-width: 70%;
        }
    }

    &.open {
        background-color: var(--color-tertiary);
      

        &:before {
            opacity: 1;
        }

        .body {
            padding: 0 var(--padding-x);
            height: v-bind(bodyHeight);
        }

        .image {
            opacity: 1;
        }
    }

    .heading {
        padding-top: 1rem;
        padding-bottom: 1rem;
        cursor: pointer;

        @include disable-selection;
    }

    .title {
        display: flex;
        gap: 1rem;
        align-items: center;
        text-transform: none;

        @include media-up(md) {
            font-size: var(--font-size-h3);
        }
    }

    .content {
        font-weight: 600;
        z-index: 1;
        line-height: 1.6;
        grid-area: content;
        font-size: var(--font-size-large);
        display: flex;
        flex-direction: column;
        gap: 1rem;

        strong {
            color: var(--color-primary);
        }
    }

    .icon {
        &.rotate {
            transform: rotate(180deg);
        }
    }

    .image {
        position: relative;
        align-self: flex-end;
        margin-right: -2rem;
        z-index: 1;
        grid-area: image;
        pointer-events: none;

        @include media-up(md) {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
            min-width: 320px;
            opacity: 0;
            transition: 0.3s ease-in-out;
        }

        @include media-up(xl) {
            top: 0;
            transform: translateY(-10%);

        }

    }

    .cta {
        z-index: 1;
        grid-area: cta;
        align-self: flex-start;
        font-weight: 400;
        margin-bottom: var(--padding-y);
    }
}
</style>

<style lang="scss">
.collapse {
    .content {
        strong {
            color: var(--color-primary);
        }
    }

    .image {
        @include media-up(md) {
            img {
                width: 100%;
            }
        }
    }
}
</style>
