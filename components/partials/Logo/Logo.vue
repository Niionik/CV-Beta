<template>
    <NuxtLink to="/">
        <img src="~/assets/img/logo.svg" alt="WrzalekDevelopment" />
    </NuxtLink>
</template>
<style lang="scss" scoped>
a {
    display: flex;
    align-items: center;
}

img {
    max-width: 90px;

    @media (min-width: 375px) {
        max-width: none;
    }
}

.company {
    img {
        max-width: 110px;

        @media (min-width: 375px) {
            max-width: none;
        }
    }
}
</style>