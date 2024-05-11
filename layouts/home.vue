<template>
    <div>
        <Header :isHome="true" />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>