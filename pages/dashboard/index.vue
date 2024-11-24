<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";
import { useAuthStore } from "~/stores/authStore";
import UiInput from "~/components/form/UiInput.vue";

const storeUser = useUserStore();
const storeAuth = useAuthStore();
definePageMeta({
  middleware: 'auth',
});

onMounted(() => {
  storeUser.detailUser();
})

</script>

<template>
  <div class="bg-white mt-10 overflow-hidden rounded-2xl">
    <div class="p-10 flex flex-col gap-6">
<!--      User Detail -->
      <div class="border border-slate-200 rounded-lg overflow-hidden">
        <div class="bg-teal-50 text-white text-sm px-4 py-2.5">
          <h1 class="text-teal-700 font-semibold">User Profile</h1>
        </div>
        <div class="p-4">
          <div class="flex">
            <div class="w-1/2">Id</div>
            <div class="w-1/2">: {{ storeAuth.userDetails.id }}</div>
          </div>
          <div class="flex">
            <div class="w-1/2">Name</div>
            <div class="w-1/2">: {{ storeAuth.userDetails?.name }}</div>
          </div>
          <div class="flex">
            <div class="w-1/2">Email</div>
            <div class="w-1/2">: {{ storeAuth.userDetails.email }}</div>
          </div>

          <div class="flex">
            <div class="w-1/2">Phone</div>
            <div class="w-1/2">: {{ storeAuth.userDetails.phone }}</div>
          </div>

          <div class="flex">
            <div class="w-1/2">username</div>
            <div class="w-1/2">: {{ storeAuth.userDetails.username }}</div>
          </div>

          <div class="flex">
            <div class="w-1/2">website</div>
            <div class="w-1/2">: {{ storeAuth.userDetails.website }}</div>
          </div>

        </div>

      </div>

<!--      Company-->

      <div class="border border-slate-200 rounded-lg overflow-hidden">
        <div class="bg-teal-50 text-white text-sm px-4 py-2.5">
          <h1 class="text-teal-700 font-semibold">Company </h1>
        </div>
        <div class="p-4">
          <div class="flex">
            <div class="w-1/2">Name</div>
            <div class="w-1/2">: {{ storeAuth.userDetails.company?.name }}</div>
          </div>
          <div class="flex">
            <div class="w-1/2">Catch Phrase</div>
            <div class="w-1/2">: {{ storeAuth.userDetails.company?.catchPhrase }}</div>
          </div>
          <div class="flex">
            <div class="w-1/2">Bs</div>
            <div class="w-1/2">: {{ storeAuth.userDetails.company?.bs }}</div>
          </div>
        </div>

      </div>

<!-- Address -->
      <div class="border border-slate-200 rounded-lg overflow-hidden">
        <div class="bg-teal-50 text-white text-sm px-4 py-2.5">
          <h1 class="text-teal-700 font-semibold">Address </h1>
        </div>

        <div class="p-4">
        <div class="flex">
          <div class="w-1/2">street</div>
          <div class="w-1/2">: {{ storeAuth.userDetails.address?.street }}</div>
        </div>
        <div class="flex">
          <div class="w-1/2">suite</div>
          <div class="w-1/2">: {{ storeAuth.userDetails.address?.suite }}</div>
        </div>
        <div class="flex">
          <div class="w-1/2">city</div>
          <div class="w-1/2">: {{ storeAuth.userDetails.address?.city }}</div>
        </div>
        <div class="flex">
          <div class="w-1/2">zipcode</div>
          <div class="w-1/2">: {{ storeAuth.userDetails.address?.zipcode }}</div>
        </div>
        </div>
      </div>



    </div>

  </div>
</template>

<style scoped lang="scss">
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
