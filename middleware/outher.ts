export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/') {
        navigateTo('/login');
    }
})
