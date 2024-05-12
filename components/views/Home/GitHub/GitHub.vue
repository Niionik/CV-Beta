<script lang="ts" setup>
import iconGit from '~/assets/img/icons/icon-target.svg';

const accordionItems = [
    {
        heading: 'Interpreter AltariLOGO',
        lead: 'JavaScript',
        content: 'Poprzez prosty interfejs i intuicyjny język Logo, użytkownicy będą mogli praktykować umiejętności programowania, takie jak algorytmy, pętle i warunki, jednocześnie rozwijając zdolności logicznego myślenia i planowania. Dodatkowo, poprzez eksperymentowanie z różnymi kształtami, kolorami i animacjami, użytkownicy będą mogli wyrażać swoją kreatywność i rozwijać umiejętności problem-solving oraz wyobraźnię.',
        open: false
    },
    {
        heading: 'Generator zwierząt',
        lead: 'Java',
        content: 'Aplikacja pozwala na generowanie losowych cech zwierząt oraz implementuje funkcje życiowe, takie jak jedzenie, chorowanie, leczenie i rozmnażanie się. Projekt rozwijał moje umiejętności programowania w Javie oraz pozwolił mi eksplorować kreatywne i logiczne aspekty symulacji życia wirtualnych populacji.',

        open: false
    },

];

</script>

<template>
    <section id="GitHub">
        <Container class="wrapper">
            <NuxtImg class="img-mobile" src="https://avatars.githubusercontent.com/u/35503446?v=4" format="webp"
                width="400" height="384" sizes="400px sm:568px" />
            <NuxtImg class="img-desktop" src="https://avatars.githubusercontent.com/u/35503446?v=4" format="webp"
                loading="lazy" width="491" height="441" sizes="491px md:673px" />
            <div class="text-wrapper">
                <h2>// GitHub
                </h2>
            </div>

            <div class="list">
                <Container size="m">
                    <ProjectsAccordion :items="accordionItems" />
                </Container>
            </div>
        </Container>
        <Container size="s">
            <SpecialLink class="pill" :to="'https://github.com/Niionik'" target="_blank">
                Przejdź do profilu GitHub
            </SpecialLink>
        </Container>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: var(--color-white);
    color: var(--color-black);
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
            top: 10%;
            // height: 40%;
            // width: auto;
            z-index: 0;
            border-radius: 100%;
            height: auto;
            width: 200px;
        }
    }

    @include media-up(xl) {
        margin: 0 auto;
        padding-top: 10rem;
        padding-bottom: 10rem;

        img {
            left: 20%;
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
