<script setup lang="ts">
definePageMeta({
  middleware: ['auth', "vip"],
})
</script>

<template>
  <div class="container h-screen flex items-center justify-center">
    <div class="flex flex-col items-center justify-center gap-10">
      <img class="h-[400px]" src="~/assets/images/icon-vip.svg" />
      <div>
        <h1 class="text-4xl text-teal-800 font-bold text-center">Welcome Back VIP</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
