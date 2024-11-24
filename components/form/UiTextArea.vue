<script setup lang="ts">

</script>

<template>
  <div class="form-control">
    <label class="form-label">Hello World</label>
    <textarea class="form-text-area" placeholder="Please enter something" rows="3" cols="50"/>
  </div>
</template>

<style lang="scss" scoped>
.form-control {
  @apply flex flex-col mb-4;
}

.form-label {
  @apply text-sm text-gray-800 font-semibold mb-2;
}

.form-text-area {
  @apply border border-gray-200 rounded-md text-sm font-light px-3 py-2;
}
</style>
