<template>
  <div class="h-screen flex items-center">
    <div class="container w-[900px] mx-auto">
      <div class="border border-slate-200 overflow-hidden rounded-lg flex flex-row">
        <div class="bg-teal-500 h-auto flex w-1/2">
          <img height="100" width="100" class="h-[400px] w-full" :src="dataBackground" >
        </div>
        <div class="w-1/2 p-8 bg-white relative">
          <div class="bg-teal-700 h-1.5 w-full absolute bottom-0 left-0"></div>
        <h2 class="text-teal-700 font-semibold text-xl text-center mb-10">Form Login</h2>
        <form  @submit.prevent="onSubmitLogin">
          <ui-input
              v-model="storeAuth.formLogin.username"
              name="username"
              label="Username"
              placeholder="Enter your username"
              type="text"
          />
          <ui-input
              v-model="storeAuth.formLogin.email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              type="email"
          />
          <div class="flex gap-3 mt-6">
            <ui-button type="submit" styleClass="w-full" :outline="false" :label="'Login'" variant="primary" />
            <ui-button type="button" styleClass="w-full" :outline="true" :label="'Registration'" variant="primary" />
          </div>

        </form>
      </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'auth',
});
import { ref } from 'vue';
import UiInput from "~/components/form/UiInput.vue";
import UiButton from "~/components/form/UiButton.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "~/stores/authStore";
import { useUserStore } from "~/stores/userStore";
const storeAuth = useAuthStore();
const storeUsers = useUserStore();
const router = useRouter();
const dataBackground = ref<string>('https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=3404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

const getListUsers = () => {
  storeUsers.fetchListUser();
}

const onSubmitLogin = () => {
  try {
    storeAuth.login();
    if (storeAuth.isAuthenticated) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  getListUsers();
})

</script>
