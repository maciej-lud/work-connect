<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";

defineProps<{
  text: string;
  iconName?: string;
  iconColor?: string;
  buttonStyle?: Record<string, string | number>;
  textStyle?: Record<string, string | number>;
}>();
</script>

<template>
  <button class="button" :style="buttonStyle">
    <SvgIcon
      v-if="iconName"
      :name="iconName"
      :color="iconColor"
      class="button__icon"
    />
    <span class="font-medium" :style="textStyle">{{ text }}</span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  &__icon {
    margin-right: 10px;
  }
}
</style>
