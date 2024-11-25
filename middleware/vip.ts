import {useCookie} from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
    const getId: any = useCookie('id').value;
    let id: any;
    if (getId) {
        try {
            id = parseInt(JSON.parse(getId));
        } catch (error) {
            console.error('Error parsing user cookie:', error)
        }
    }
    console.log(id);

    if (id <= 5 && (to.path === '/dashboard/vip' || to.path === '/dashboard')) {
        return navigateTo('/dashboard/not-vip');
    }

    if (id > 5 && (to.path === '/dashboard/not-vip' || to.path === '/dashboard')) {
        return navigateTo('/dashboard/vip');
    }
})

