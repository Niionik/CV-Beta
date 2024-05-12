<script lang="ts" setup>

const props = defineProps({
    items: Array<Item>
});


type Item = {
    heading: string;
    lead:string;
    content: string;
    open: boolean;
};

onMounted(() => {
    document.addEventListener('collapse:toggle', (event: any) => {

        if (!props.items) {
            return;
        }

        props.items.forEach((item, index) => {
            const id = `collapse-${index}`;

            if (event.detail.id !== id) {
                document.dispatchEvent(new CustomEvent('collapse:hide', {
                    detail: {
                        id
                    }
                }));
            }
        });
    });
});
</script>

<template>
    <div class="accordion">
        <ProjectCollapse v-for="(item, index) in items" :open="item.open" :id="`collapse-${index}`" class="item">
            <template #title>
                <span v-html="item.heading"></span>
            </template>
            <template #lead>
                <span v-html="item.lead"></span>
            </template>
            <template #content>
                <div v-html="item.content"></div>
            </template>
        </ProjectCollapse>
    </div>
</template>
<style scoped>
</style>