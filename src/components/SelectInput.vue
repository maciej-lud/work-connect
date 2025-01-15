<script setup lang="ts">
import { ref, watch } from "vue";
import type { PropType } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

const props = defineProps({
  options: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  defaultValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits<{
  (e: "update:selected", value: string): void;
}>();

const selectedOption = ref<string>("");

selectedOption.value = props.defaultValue;

watch(selectedOption, (nV) => emit("update:selected", nV));

watch(
  () => props.defaultValue,
  (nV) => (selectedOption.value = nV)
);
</script>

<template>
  <div class="input-wrapper">
    <select v-model="selectedOption" class="input-wrapper__select">
      <option v-for="item in options" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
    <SvgIcon name="arrow-down" class="input-wrapper__icon" />
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  &__select {
    line-height: 2.2;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    padding: 10px 36px 10px 16px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  &__icon {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    pointer-events: none;
  }
}
</style>
