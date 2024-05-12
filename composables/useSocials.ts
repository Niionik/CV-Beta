import iconFb from '@/assets/img/icon-fb.svg';
import iconLinkedIn from '@/assets/img/icon-linkedin.svg';

const socials = {
    facebook: {
        title: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: iconFb
    },
    linkedin: {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/',
        icon: iconLinkedIn
    },
};

export default function useSocials() {
    return {
        socials
    }
}