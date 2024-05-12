<script lang="ts" setup>
const { socials } = useSocials();
</script>
<template>
    <div class="socials">
        <Pill class="pill" v-for="(social, index) in socials" :key="index" :to="social.url" target="_blank">
            <img :src="social.icon" :alt="social.title" />
        </Pill>
    </div>
</template>
<style lang="scss" scoped>
.socials {
    display: flex;
    gap: 2.5rem;
}

.socials-footer {
    img {
        height: var(--font-size-base);
        filter: brightness(0) saturate(100%) invert(10%) sepia(17%) saturate(5743%) hue-rotate(187deg) brightness(101%) contrast(94%);
        transition: filter 0.3s;

        @include media-up(lg) {
            height: var(--font-size-medium);
        }
    }

    a {
        &:hover {
            img {
                filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(33deg) brightness(104%) contrast(102%);
            }
        }
    }

}

.pill {
    width: 3rem;
    justify-content: center;
}

footer {
    @include media-up(lg) {
        .pill {
            height: fit-content;
            width: 3rem;
            padding:  0.85rem;
            justify-content: center;
        }
    }
}
</style>