<script setup lang="ts">
import {defineProps, defineEmits} from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: 'submit',
  },
  type: {
    type: String as PropType<'reset' | 'submit' | 'button' | undefined | null>,
    required: false,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  variant: {
    type: String as PropType<'primary' | 'secondary' | 'reset' | 'cancel' | 'info' | 'warning'>,
    required: false,
    default: 'primary',
  },
  outline: {
    type: Boolean,
    required: false,
    default: false,
  },
  styleClass: {
    type: String,
    required: false,
    default: '',
  }
});

const emit = defineEmits(['click']);
</script>

<template>
  <button
      v-if="!props.outline"
      :class="['ui-button', `ui-button--${variant}`, `${styleClass}`]"
      :type="props.type"
      :disabled="props.disabled"
      @click="$emit('click')">{{ props.label }}
  </button>
  <button
      v-else
      :class="['ui-button-outline', `ui-button--outline--${variant}`, `${styleClass}`]"
      :type="props.type"
      :disabled="props.disabled"
      @click="$emit('click')"
  >
    {{ props.label }}
  </button>
</template>

<style lang="scss" scoped>

// Variable
.ui-button {
  @apply p-2 px-4 text-sm rounded;
  &.ui-button-- {
    &primary {
      @apply bg-teal-700 text-white;
      &:hover {
        @apply bg-teal-800;
      }
    }

    &secondary {
      @apply bg-blue-700 text-white;
      &:hover {
        @apply bg-blue-800;
      }
    }
  }

  &:disabled {
    @apply bg-slate-100 text-slate-500;
    &:hover {
      @apply bg-slate-200 text-slate-500;
    }
  }
}

.ui-button-outline {
  @apply p-2 px-4 text-sm rounded;
  &.ui-button--outline-- {
    &primary {
      @apply bg-white border border-teal-700 text-teal-700;
      &:hover {
        @apply bg-teal-50;
      }
    }

    &secondary {
      @apply bg-white border border-blue-700 text-blue-700;
    }
  }

  &:disabled {
    @apply bg-slate-100 text-slate-500 border border-slate-300;
    &:hover {
      @apply bg-slate-200 text-slate-500;
    }
  }
}
</style>
