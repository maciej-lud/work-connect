<script setup lang="ts">
import TextInput from "@/components/TextInput.vue";
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <div class="flex items-center">
    <TextInput placeholder="Wyszukaj użytkownika..." iconName="magnifier" />
    <BaseButton
      text="Sortuj od: Imię i nazwisko"
      iconName="sort-arrows"
      class="table-filters__button"
    />
  </div>
</template>

<style lang="scss" scoped>
.table-filters__button {
  box-shadow: 0 4px 2px 0 rgba(#e0e0e0, 0.25);
  margin-left: 12px;
}
</style>
