import { defineStore } from 'pinia';
import { useAuthStore } from "~/stores/authStore";
export const useUserStore = defineStore('userStore', {
    state: () => ({
        listUser: [] as Array<any>,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchListUser() {
            this.loading = true;
            this.error = null;

            try {
                const { $axios } = useNuxtApp();
                const response = await $axios.get('/users');
                this.listUser = response.data;
            } catch (error) {
                this.error = 'Gagal mengambil data pengguna.'
            } finally {
                this.loading = false;
            }
        },

        async detailUser() {
            const authStore = useAuthStore();
            const getId: any = useCookie('id').value;
            const id = JSON.parse(getId);
            const { $axios } = useNuxtApp();
            await $axios.get(`/users/${id}`).then((response: any) => {
                authStore.userDetails = response.data;
            }).catch((error: any) => {
                console.log(error);
            })
        }
    }
})
