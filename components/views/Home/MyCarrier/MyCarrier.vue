<script>
export default {
    name: 'MyCareer',
    data() {
        return {
            "jobHistory": [
            {
                    "title": "Web Developer",
                    "subtitle": "Arkonsoft",
                    "description": "Odpowiedzialność za rozwój aplikacji internetowych przy użyciu Vue.js i Node.js, Wordpress, PrestaShop. Kontakt z klientem.",
                    "startDate": "2022",
                    "endDate": "Obecnie"
                },
                {
                    "title": "Freelancer",
                    "subtitle": "Samozatrudniony",
                    "description": "Realizacja projekty na zlecenie dla różnych klientów, w tym rozwój i projektowanie stron internetowych. W technologiach WordPress, PrestaShop, PHP, Symfony, SCSS...",
                    "startDate": "2023",
                    "endDate": "2024"
                }
            ]
        }
    }
}
</script>
<template>
    <section id="moja-kariera">
        <Container class="wrapper">
            <h1>Moja kariera</h1>
            <div class="career-line"></div>
            <div class="career-dots">
                <div v-for="(position, index) in jobHistory" :key="index" class="career-dot">
                    <div class="dot"></div>
                    <div class="career-info">
                        <h2>{{ position.title }}</h2>
                        <h3>{{ position.subtitle }}</h3>
                        <p>{{ position.description }}</p>
                        <p class="date-range">{{ position.startDate }} - {{ position.endDate }}</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>


<style lang="scss" scoped>
.wrapper {
    position: relative;
}

.career {
    &-line {
        position: absolute;
        top: 30%;
        left: 15px;
        width: 2px;
        height: 50%;
        background-color: #333;
        z-index: 1;
    }

    &-dots {
        position: relative;
        margin-left: 30px;
    }

    &-dot {
        display: flex;
        align-items: center;
        margin-bottom: 50px;
    }

    &-info {
        padding: 20px;
    }
}

.dot {
    width: 20px;
    height: 20px;
    background-color: #333;
    border-radius: 50%;
    margin-right: 20px;
}

.date-range {
    font-style: italic;
}
</style>