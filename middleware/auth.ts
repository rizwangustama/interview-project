import {useCookie} from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
    const getCookie : any = useCookie('isAuthenticated').value;
    const getId : any = useCookie('id').value;
    const parseId : any = JSON.parse(getId);
    let parseCookie: any;
    if (!getCookie) {
        parseCookie = false
    } else {
        parseCookie = JSON.parse(getCookie);
    }
    if (!parseCookie && to.path === '/') {
        return navigateTo('/login');
    }

})
