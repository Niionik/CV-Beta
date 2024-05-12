<script setup lang="ts">
const route = useRoute();
const { fetchPageBySlug } = useApi();
const page = ref({
    meta: {
        title: '',
        description: '',
    },
    title: '',
    content: '',
});

onMounted(async () => {
    try {
        const data = await fetchPageBySlug(route.params.slug as string);
        page.value = data;


        useHead({
            title: page.value.meta.title + ' | Wrzałek.Dev',
            meta: [
                {
                    name: 'description',
                    content: page.value.meta.description,
                }
            ],
        });

    } catch (error) {
        console.error(error);
    }
});

</script>

<template>
    <div class="page">
        <h1 class="title">{{ page.title }}</h1>
        <div class="content" v-html="page.content">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    a {
        text-decoration: underline;
        transition: text-decoration-color ease 0.3s;

        &:hover {
            text-decoration-color: none;
        }
    }
}
</style>

<style lang="scss">
.description {
    max-width: 450px;
    font-size: var(--font-size-large);
}
</style>

