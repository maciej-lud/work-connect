<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";

defineProps<{
  placeholder?: string;
  iconName?: string;
  iconColor?: string;
}>();
</script>

<template>
  <div class="input-wrapper">
    <SvgIcon v-if="iconName" :name="iconName" :color="iconColor" class="mr-2" />
    <input class="input-wrapper__input" :placeholder="placeholder" />
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
