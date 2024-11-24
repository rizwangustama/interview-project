<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";
import { useAuthStore } from "~/stores/authStore";
import UiInput from "~/components/form/UiInput.vue";

const storeUser = useUserStore();
const storeAuth = useAuthStore();
const isLoading = ref<any>(false);
definePageMeta({
  middleware: 'auth',
});

onMounted(async () => {
  isLoading.value = true
  await storeUser.detailUser();
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
});

</script>

<template>
  <div class="bg-white mt-10 overflow-hidden rounded-2xl">
    <div v-if="!isLoading" class="p-10 flex flex-col gap-6">
<!--      User Detail -->
      <div class="border border-slate-200 rounded-lg overflow-hidden">
        <div class="bg-teal-50 text-white text-sm px-4 py-2.5">
          <h1 class="text-teal-700 font-semibold">User Profile</h1>
        </div>
        <div class="p-4">
          <div class="flex items-center">
            <label class="text-sm w-4/12">User Id</label>
            <div class="w-full">
              <ui-input name="id" v-model="storeAuth.userDetails.id" :disabled="true" />
            </div>
          </div>
          <div class="flex items-center">
            <label class="text-sm w-4/12">User Name</label>
            <div class="w-full">
              <ui-input name="name" v-model="storeAuth.userDetails.name" :disabled="true" />
            </div>
          </div>
          <div class="flex items-center">
            <label class="text-sm w-4/12">User Email</label>
            <div class="w-full"><ui-input name="email" v-model="storeAuth.userDetails.email" :disabled="true"/></div>
          </div>
          <div class="flex items-center">
            <label class="text-sm w-4/12">User Phone</label>
            <div class="w-full"><ui-input name="phone" v-model="storeAuth.userDetails.phone" :disabled="true" /> </div>
          </div>
          <div class="flex items-center">
            <label class="text-sm w-4/12">Username</label>
            <div class="w-full"><ui-input name="username" v-model="storeAuth.userDetails.username" :disabled="true" /></div>
          </div>
          <div class="flex items-center">
            <label class="text-sm w-4/12">Website</label>
            <div class="w-full"><ui-input name="website" v-model="storeAuth.userDetails.website" :disabled="true"/></div>
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

    <div v-if="isLoading" class="p-10 flex flex-col gap-6">
      <div>
        <div class="space-y-4">
          <!-- Skeleton untuk title -->
          <div class="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
          <!-- Skeleton untuk paragraf -->
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>
          <!-- Skeleton untuk gambar -->
          <div class="h-40 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <div>
        <div class="space-y-4">
          <!-- Skeleton untuk title -->
          <div class="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
          <!-- Skeleton untuk paragraf -->
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>
          <!-- Skeleton untuk gambar -->
          <div class="h-40 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <div>
        <div class="space-y-4">
          <!-- Skeleton untuk title -->
          <div class="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
          <!-- Skeleton untuk paragraf -->
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>
          <!-- Skeleton untuk gambar -->
          <div class="h-40 bg-gray-200 rounded animate-pulse"></div>
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
