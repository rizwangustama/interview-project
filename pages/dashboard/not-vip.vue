<script setup lang="ts">
definePageMeta({
  middleware: ['auth', "vip" ],
})
import IconNotVip from '~/assets/images/icon-not-vip.svg'
</script>

<template>
  <div class="h-screen container flex items-center justify-center">\
    <div class="flex flex-col items-center justify-center gap-10">
      <img class="h-[400px]" src="~/assets/images/icon-not-vip.svg" />
      <div>
        <h1 class="text-4xl text-teal-800 font-bold text-center">Forbidden You Are Not A VIP</h1>
        <p class="text-center text-slate-500 text-xl">Only Users With Id Number 5 And Above Can Enter</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
