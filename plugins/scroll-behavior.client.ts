import { useRouter } from "vue-router";

export default async function () {
    if (typeof window !== "undefined") {
        const router = useRouter();

        router.afterEach(async (to, from) => {
            const { $lenis } = useNuxtApp();

            if (to.hash) {
                const targetElement = document.querySelector(to.hash) as HTMLElement;

                if (targetElement) {


                    $lenis.scrollTo(targetElement, { offset: -100 });
                    return;
                }
            }

            // if (to.path == '/' && from.path == '/') {

            // }

            $lenis.scrollTo(0);

        });
    }
}