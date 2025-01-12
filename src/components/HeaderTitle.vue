<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex items-center">
    <h1 class="header__title">{{ title }}</h1>
    <span>ikona</span>
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__title {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -4%;
  }
}
</style>
