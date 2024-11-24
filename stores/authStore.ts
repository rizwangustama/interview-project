import { defineStore } from 'pinia';
import { useUserStore } from "~/stores/userStore";
import { useCookie } from "#app";
export const useAuthStore = defineStore('auth', {
    state: () => ({
        formLogin: {
            username: '',
            email: '',
        },
        userDetails: '',
        isAuthenticated: false,
    }),
    actions: {
        setUsername(value: string) {
            this.formLogin.username = value;
        },
        setEmail(value: string) {
            this.formLogin.email = value;
        },
        // "Bret"
        // "Sincere@april.biz"
        login() {
            const userStore = useUserStore();
            if (this.formLogin.username != '' && this.formLogin.email != '') {
                const checkUsernameAndEmail = userStore.listUser.filter((item) => item.username == this.formLogin.username && item.email == this.formLogin.email);
                if (checkUsernameAndEmail.length > 0) {
                    // Simpan status login dan user ke dalam cookie
                    this.isAuthenticated = true;
                    this.userDetails = checkUsernameAndEmail[0];
                    useCookie('isAuthenticated').value = String(true);
                    useCookie('id').value = JSON.stringify(checkUsernameAndEmail[0]?.id);

                } else {
                    throw  new Error('username atau password tidak boleh kosong')
                }
            } else  {
                throw  new Error('username atau password tidak boleh kosong')
            }

            console.log(this.formLogin);
        },
        logout() {
            this.formLogin.username = '';
            this.formLogin.email = '';
            this.isAuthenticated = false;
            useCookie('isAuthenticated').value = String(false);
            useCookie('userDetail').value = '';
        }
    }
})
