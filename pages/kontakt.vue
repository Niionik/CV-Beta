<script lang="ts" setup>
useHead({
    title: 'Kontakt | Patrycja | Wrzalek.Dev',
    meta: [
        {
            name: 'description',
            content: 'Patrycja, Web Developerka, oferuje pełen zakres usług związanych z tworzeniem stron internetowych. Gotowa na wyzwania projektowe - skontaktuj się już dziś!'
        }
    ]
});
</script>

<template>
    <div class="page">
        <h1 class="title">Kontakt</h1>
        <div class="description">Marzysz o dynamicznej i przyciągającej uwagę stronie internetowej dla swojego biznesu? Jestem do Twojej dyspozycji! Z moją pasją Twoja witryna stanie się wizytówką sukcesu w świecie online. Bez względu na to, czy potrzebujesz odświeżenia istniejącej strony czy też kompletnego wdrożenia projektu od podstaw. Zapewniam nie tylko profesjonalizm, ale także indywidualne podejście dostosowane do Twoich potrzeb. Skontaktuj się i daj znać o czym marzysz!</div>
        <div class="content">
            <div class="main-info">
                <a href="#">Patrycja Opałacz</a> 
            </div>
            <div class="additional-info">
                <h4>Dane kontaktowe</h4>
                <ul>
                     <li>
                        Wrzalek.Dev
                    </li>
                    <li><a href="mailto:patrycja@wrzalek.dev" class="email">patrycja@wrzalek.dev</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25em;
}

.description {
    max-width: 450px;
    font-size: var(--font-size-large);
}

.phone,
.email {
    display: block;
    font-size: var(--font-size-h3);
    font-weight: 600;
}

.email {
    text-decoration: underline;
}

.muted {
    padding: 0.5em 0;
    opacity: 0.5;
    font-style: italic;
}

.main-info {
    padding: 3rem 0;
}
</style>