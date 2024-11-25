<script setup lang="ts">
import UiInput from "~/components/form/UiInput.vue";
import UiButton from "~/components/form/UiButton.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

definePageMeta({
  layout: 'auth',
});
const router = useRouter();
const dataBackground = ref<string>('https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=3404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
const onSubmitRegister = () => {
  alert("Submit")
}

const gotLogin = () => {
  router.push('/login')
}
</script>
<template>
  <div class="h-screen flex items-center">
    <div class="container max-w-[1000px] mx-auto">
      <div class="border border-slate-200 overflow-hidden rounded-lg flex flex-row">
        <div class="bg-teal-500 h-auto flex w-1/2">
          <img height="100" width="100" class="h-full object-cover w-full" :src="dataBackground">
        </div>
        <div class="w-1/2 p-8 bg-white relative">
          <div class="bg-teal-700 h-1.5 w-full absolute bottom-0 left-0"></div>
          <h2 class="text-teal-700 font-semibold text-xl text-center mb-10">Form Registration</h2>
          <form @submit.prevent="onSubmitRegister">
            <ui-input
                name="username"
                label="Username"
                placeholder="Enter your username"
                type="text"
                :validate="true"
            />
            <ui-input
                name="name"
                label="Full Name"
                placeholder="Enter your Number Telephone"
                type="text"
                :validate="false"
            />
            <ui-input
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
                :validate="true"
            />
            <ui-input
                name="phone"
                label="No Telp"
                placeholder="Enter your Number Telephone"
                type="number"
                :validate="true"
            />
            <div class="flex gap-3 mt-6">
              <ui-button type="submit" styleClass="w-full" :outline="false" :label="'Registration'" variant="primary"/>
              <ui-button type="button" styleClass="w-full" :outline="true" :label="'Login'" @click="gotLogin" variant="primary"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
</style>
