<script setup lang="ts">
import type { PropType } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

defineProps({
  options: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
</script>

<template>
  <div class="input-wrapper">
    <select class="input-wrapper__select">
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
    padding: 10px 26px 10px 16px;
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
