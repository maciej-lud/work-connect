<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <button class="button">
    <span class="button__text">{{ text }}</span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  color: #fff;
  background-color: #0040e0;
  padding: 14px 20px;
  &__text {
    font-weight: 700;
    letter-spacing: -1%;
  }
}
</style>
