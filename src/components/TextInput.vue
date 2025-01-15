<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

const props = defineProps<{
  placeholder?: string;
  iconName?: string;
  iconColor?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const inputValue = ref<string>("");

const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  inputValue.value = target.value;
  emit("update:modelValue", inputValue.value);
};
</script>

<template>
  <div class="input-wrapper">
    <SvgIcon
      v-if="props.iconName"
      :name="props.iconName"
      :color="props.iconColor"
      class="mr-2"
    />
    <input
      :value="inputValue"
      :placeholder="props.placeholder"
      class="input-wrapper__input"
      @input="handleInputChange"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  box-shadow: 0 4px 2px 0 rgba(#e0e0e0, 0.25);
  padding: 14px 24px 15px;
  &__input {
    color: #878787;
    border: none;
    border-radius: 0;
    outline: none;
  }
}
</style>
