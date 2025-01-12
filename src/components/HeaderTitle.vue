<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="header">
    <h1 class="header__title">{{ title }}</h1>
    <span>ikona</span>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  &__title {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -4%;
  }
}
</style>
