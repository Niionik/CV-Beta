<script lang="ts" setup>
const items = [
    {
        logo: {
            src: '/img/badges/AZ900.png',
            alt: 'AZ900',
            width: 450
        },

        content: 'Osoby posiadające certyfikat Azure Fundamentals wykazywały się podstawową wiedzą na temat usług w chmurze oraz sposobu świadczenia tych usług za pomocą platformy Microsoft Azure.',
        badge: 'Azure Fundamentals',
        position: 'Microsoft'
    },
    {
        logo: {
            src: '/img/badges/Data.png',
            alt: 'Data',
            width: 450
        },

        content: 'Posiadacze certyfikatu Azure Data Fundamentals wykazali się podstawową wiedzą na temat podstawowych koncepcji dotyczących danych oraz sposobu ich implementacji przy użyciu usług danych Microsoft Azure.',
        badge: 'Azure Data Fundamentals',
        position: 'Microsoft'
    },
    {
        logo: {
            src: '/img/badges/security-compliance.png',
            alt: 'security-compliance',
            width: 450
        },

        content: 'Osoby, które ukończyły kurs Security, Compliance and Identity Fundamentals, wykazują funkcjonalną wiedzę na temat bezpieczeństwa, zgodności i tożsamości (SCI) w usługach Microsoft opartych na chmurze i pokrewnych.',
        badge: 'Security, Compliance, and Identity Fundamentals',
        position: 'Microsoft'
    },
   
    {
        logo: {
            src: '/img/badges/Fundamentals.png',
            alt: 'Fundamentals',
            width: 450
        },

        content: 'Zdobycie certyfikatu Microsoft 365 Fundamentals świadczy o zrozumieniu opcji dostępnych na platformie Microsoft 365 oraz korzyściach płynących z przyjęcia usług w chmurze, modelu chmury Software as a Service (SaaS) i wdrożenia usługi w chmurze Microsoft 365.',
        badge: 'Fundamentals',
        position: 'Microsoft'
    },
];
</script>
<template>
    <section id="certyfikaty" class="home-section testimonial">
        <Container size="m">
            <h2>Moje Certyfikaty</h2>
        </Container>
        <Container>
            <Carousel :items-to-show="1" class="items">
                <slide v-for="item, index in items" :key="index" class="item">
                    <div class="item__inner">
                        <NuxtImg :src="item.logo.src" :alt="item.logo.alt" :width="item.logo.width" />
                        <div class="item__badge badge">
                            <span class="badge__name">{{ item.badge }}</span>
                            <span class="badge__position">{{ item.position }}</span>
                        </div>
                        <div class="item__content">
                            {{ item.content }}
                        </div>

                    </div>
                </slide>

                <template #addons>
                    <navigation class="navigation" />
                    <pagination />
                </template>
            </Carousel>
        </Container>
    </section>
</template>
<style lang="scss" scoped>
h2 {
    strong {
        display: block;
    }
}

.items {
    text-align: left;

    @include media-up(xl) {
        // padding: 0 2rem;
    }
}

.item {
    padding-bottom: 1.5rem;

    &__inner {
        background-color: var(--color-gray-100);
        padding: 2rem 1rem;
        position: relative;
        height: 100%;
        gap: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 748px;

       

        @include media-up(md) {
            padding: 4rem 7rem;
            flex-direction: row;

        }
    }

    img {
        margin-bottom: 2rem;
            height: fit-content;
        @include media-down(sm) {
            width: 200px;
            margin: auto;

        }
    }

    &__content {
        font-weight: 600;
        font-size: var(--font-size-large);
        padding-bottom: 4rem;
    }

    .badge {
        position: absolute;
        right: 2rem;
        bottom: 2rem;
        margin: 1rem;
        transform: translateY(50%);
    }

    .badge {
        display: flex;
        flex-direction: column;

        &__name {
            color: var(--color-primary);
            font-weight: 600;
        }
    }
}
</style>
<style lang="scss">
@import '~/assets/styles/libs/vue3-carousel/variables.scss';
@import '~/assets/styles/libs/vue3-carousel/pagination.scss';
@import '~/assets/styles/libs/vue3-carousel/navigation.scss';

.navigation {
    margin: 0;

    @include media-down(xl) {
        display: none;
    }

    &.carousel {
        &__next {
            right: calc((var(--vc-nav-width)) * -1);
        }

        &__prev {
            left: calc((var(--vc-nav-width)) * -1);
        }
    }
}
</style>