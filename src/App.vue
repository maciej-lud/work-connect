<script setup lang="ts">
import HeaderTitle from "./components/HeaderTitle.vue";
import BaseButton from "./components/BaseButton.vue";
import DataTable from "./components/DataTable/DataTable.vue";
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-6">
      <HeaderTitle title="Użytkownicy" />
      <BaseButton text="Zaproś użytkownika" />
    </div>
    <DataTable />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 50px;
}
</style>
