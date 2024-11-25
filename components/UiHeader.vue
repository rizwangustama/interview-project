<script setup lang="ts">
import UiButton from "~/components/form/UiButton.vue";
import {useAuthStore} from "~/stores/authStore";
import {useRouter} from "#vue-router";

const storeAuth = useAuthStore();
const router = useRouter();
const submitLogout = () => {
  try {
    storeAuth.logout();
    if (!storeAuth.isAuthenticated) {
      router.push('/login');
    }
  } catch (error) {
    console.log(error)
  }
}
const accessVip = () => {
  router.push('/dashboard/vip');
}
const gotoDashboard = () => {
  router.push('/dashboard');
}
</script>

<template>
  <header class="bg-teal-700 py-2.5">
    <div class="container">
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-white font-semibold cursor-pointer" @click="gotoDashboard">Frontend Developer</h2>
        </div>
        <div>
          <ul class="flex gap-4">
            <li class="text-sm text-white">
              <ui-button label="Access Vip" type="button" variant="primary" :outline="false"
                         @click="accessVip"></ui-button>
            </li>
            <li class="text-sm text-white">
              <ui-button @click="submitLogout" type="button" label="Log Out" variant="primary" :outline="false"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div class="flex">
    <div class="h-2 bg-teal-600 w-1/2"></div>
    <div class="h-2 bg-teal-50 w-1/2"></div>
  </div>
</template>

<style scoped lang="scss">

</style>
