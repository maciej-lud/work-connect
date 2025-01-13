<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";

withDefaults(
  defineProps<{
    title: string;
    iconName?: string;
    iconColor?: string;
  }>(),
  {
    iconColor: "black",
  }
);
</script>

<template>
  <div class="flex items-center">
    <h1 class="header__title">{{ title }}</h1>
    <SvgIcon v-if="iconName" :name="iconName" :color="iconColor" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__title {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -4%;
    margin-right: 16px;
  }
}
</style>
