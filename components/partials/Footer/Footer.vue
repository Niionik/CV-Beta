<template>
    <footer>
        <div class="wrapper">
            <FooterContactCTA class="footer-contact-cta" />
            <ContactCTA class="contact-cta btn--secondary" />
            <div class="company">
                <Logo class="logo" />
                <OurAddress class="our-address" />
                <Nip class="nip" />
            </div>
            <MenuFooter class="menu-footer" />
            <div class="contact-n-location">
                <OurContact class="our-contact" />
             
            </div>
            <Socials class="socials-footer" />
            <Copyright class="copyright" />
            
        </div>
    </footer>
</template>


<style lang="scss" scoped>
footer {
    width: 100%;
    background: var(--color-primary);
    z-index: 1200;
    transition: background-color 0.3s ease-in-out, translate 0.3s ease-in-out;
}

.wrapper {
    display: grid;
    gap: 1rem;

    width: 100%;
    max-width: 1366px;
    margin: 0 auto;

    padding: 6.5rem var(--footer-padding) 4.5rem;

    @include media-up(lg) {
        padding: 5rem 5.7rem 3rem;
        grid-template-areas:
            "fccta fccta fccta ccta"
            "company menu cnl socials"
            "copyright . . pnr"
        ;
    }
}

.footer-contact-cta {
    @include media-up(lg) {
        grid-area: fccta;
    }
}

.contact-cta {
    display: inline-flex;
    justify-content: center;
    margin: 1.5rem 0;
    padding: 2rem 0;
    height: fit-content;

    @include media-up(lg) {
        grid-area: ccta;
        margin: 0;
        padding:1.25rem 1.75rem;
    }
}

.company {
    margin-top: 3rem;

    @include media-up(lg) {
        grid-area: company;
        margin-top: 6.5rem;
    }

    .logo {
        img {
            max-width: 110px;
        }
    }

    .our-address {
        margin-top: 2.5rem;

        @include media-up(lg) {
            margin-top: 2.25rem;
        }
    }

    .nip {
        margin-top: 1.25rem;
    }
}

.menu-footer {
    @include media-up(lg) {
        grid-area: menu;
        margin-top: 5.3rem;
        margin-left: 6rem;
    }
}

.contact-n-location {
    margin-top: 0.5rem;

    @include media-up(lg) {
        grid-area: cnl;
        margin-top: 6.5rem;
        margin-left: 6rem;
    }

    .our-contact {
        line-height: 1.3rem;
        display: grid;
        gap: 0.5rem;
    }

    .location-cta {
        margin: 2rem 0;
        padding: 1.1rem 1.25rem;
        transition: background-color ease 0.3s;

        &:hover {
            background-color: var(--color-gray-100);
        }
    }
}

.socials-footer {
    margin-top: 1rem;
    gap: 1.5rem;

    @include media-up(lg) {
        grid-area: socials;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        
        margin-top: 1.7rem;
        gap: 0.85rem;
    }
}

.copyright {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;

    @include media-up(lg) {
        grid-area: copyright;
        justify-content: flex-start;
        margin-top: 8rem;
    }
}

.pnr {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.25rem;

    @include media-up(lg) {
        grid-area: pnr;
        justify-content: end;
        margin-top: 8rem;
    }
}
</style>
