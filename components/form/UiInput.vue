<script setup lang="ts">
  import type {PropType} from "vue";

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: 'Name Label'
    },
    placeholder: {
      type: String,
      required: true,
      default: 'Please enter something'
    },
    type: {
      type: String as PropType<'text' | 'email' | 'number'>,
      required: false,
      default: 'text',
    }
  })
</script>

<template>
  <div class="form-control">
    <label for="inputId" class="form-label">{{ props.label }}</label>
    <input id="inputId" class="form-input" type="text" placeholder="Please enter something" />
  </div>
</template>

<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-control .form-label {
  font-size: 14px;
}

.form-control .form-input {
  padding: 8px 12px;
  border-radius: 4px;
}
</style>
