<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import type { PropType } from 'vue';
import { useInputValidator } from "~/composables/useInputValidator";
// Define Props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: 'Name Label',
  },
  placeholder: {
    type: String,
    required: false,
    default: 'Please enter something',
  },
  type: {
    type: String as PropType<'text' | 'email' | 'number'>,
    required: false,
    default: 'text',
  },
  modelValue: {
    type: [String, Number],
    required: false,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
const inputValue = ref('');
const { errorMessage, validate } = useInputValidator(props.type);
const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  validate(value);

  // Emit valid value to parent component only if there is no error
  if (!errorMessage.value) {
    emit('update:modelValue', value);
  }
}
</script>

<template>
  <div class="form-control">
    <label :for="props.name" class="form-label">{{ props.label }}</label>
    <input
        :id="props.name"
        class="form-input"
        :type="props.type"
        :placeholder="placeholder"
        v-model="inputValue"
        @input="handleInput"
    />
    <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.form-control {
  @apply flex flex-col mb-4;
}

.form-label {
  @apply font-semibold mb-2 text-sm text-slate-500;
}

.form-input {
  @apply py-2 px-3 rounded border border-gray-200 text-sm font-light outline-teal-700;
  &::placeholder {
    @apply text-sm font-light;
  }
}

.error-message {
  @apply bg-red-50 text-[10px] py-2 px-3 leading-none text-red-500;
}
</style>
