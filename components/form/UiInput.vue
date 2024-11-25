<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';
import type {PropType} from 'vue';
import {ref, watch} from 'vue';
import {useInputValidator} from "~/composables/useInputValidator";

// Define Props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: '',
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
  validate: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  }
});

const emit = defineEmits(['update:modelValue']);
const {errorMessage, validate} = useInputValidator(props.type);
const inputValue = ref(props.modelValue);

watch(
    () => props.modelValue,
    (newValue) => {
      inputValue.value = newValue;
    }
);

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  inputValue.value = value;
  if (props.validate) validate(value);
  emit('update:modelValue', value);
};
</script>

<template>
  <div :class="['form-control']">
    <label :for="props.name" v-if="props.label" class="form-label">{{ props.label }}</label>
    <input
        :id="props.name"
        class="form-input"
        :type="props.type"
        :placeholder="props.placeholder"
        v-model="inputValue"
        @input="handleInput"
        :disabled="props.disabled"
    />
    <span v-if="errorMessage && props.validate" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.form-control {
  @apply flex flex-col mb-2;
}

.form-label {
  @apply font-semibold mb-2 text-sm text-slate-500;
}

.form-input {
  @apply py-2 px-3 rounded border border-gray-200 text-sm font-normal outline-teal-700;

  &::placeholder {
    @apply text-sm font-normal;
  }
}

.error-message {
  @apply bg-red-50 text-[10px] py-2 px-3 leading-none text-red-500;
}
</style>
