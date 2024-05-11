import data from '~/data/pages';

async function fetchPageBySlug(slug: string): Promise<any> {

    // get data from /data/pages.json file
    const pages: any = data;

    // if page not found
    if (!pages.hasOwnProperty(slug)) {
        return get404PageData();
    }

    const page: any = pages[slug];

    return page;
}

function get404PageData() {
    const mainSelector = document.querySelector('main');
    mainSelector.classList.add('page404');

    return {
        meta: {
            title: "404 - Strona nie znaleziona",
        },
        title: "Ups! Coś poszło nie tak...",
        content: `
            <p>Najwidoczniej strona, której szukasz nie istnieje. Sprawdź czy adres URL jest poprawny lub wróć na stronę główną.</p>
            <p><a href="/" class="btn btn--secondary">Wróć na stronę główną</a></p>
        `
    }
}

export default function useApi() {
    return {
        fetchPageBySlug
    }
}