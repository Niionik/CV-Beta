const open = ref(false);
const headerHeight = ref(0);
const links = [
    {
        name: 'GitHub',
        to: {
            path: "/",
            hash: "#GitHub"
        },
    },
    {
        name: 'Certyfikaty',
        to: {
            path: "/",
            hash: "#certyfikaty"
        },
    },
    {
        name: 'Moja kariera',
        to: {
            path: "/",
            hash: "#moja-kariera"
        },
    },
    {
        name: 'Kontakt',
        to: {
            path: "/kontakt",
        },
    }
];

const toggleOpen = () => {
    open.value = !open.value;
};

const initHeaderHeight = () => {
    const header = document.querySelector('header');
    const height = header?.clientHeight || 0;

    headerHeight.value = height;

    window.addEventListener('resize', () => {
        const height = header?.clientHeight || 0;
        headerHeight.value = height;
    });
}

const initOnMounted = () => {
    initHeaderHeight();
}

export const useMenu = () => {
    return {
        open,
        headerHeight,
        toggleOpen,
        links,
        initOnMounted
    };
}