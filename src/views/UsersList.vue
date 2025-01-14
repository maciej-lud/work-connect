<script setup lang="ts">
import ViewLayout from "@/layouts/ViewLayout.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
import DataTable from "@/components/DataTable/DataTable.vue";
</script>

<template>
  <ViewLayout>
    <div class="flex justify-between items-center mb-6">
      <HeaderTitle
        title="Użytkownicy"
        iconName="information-circle"
        iconColor="#939393"
      />
      <BaseButton
        text="Zaproś użytkownika"
        iconName="plus"
        iconColor="#fff"
        :buttonStyle="{ backgroundColor: '#0040e0' }"
        :textStyle="{ color: '#fff', fontWeight: 700 }"
      />
    </div>
    <DataTable
      :headers="[
        '',
        'Imię i nazwisko',
        'Adres email',
        'Nazwa użytkownika',
        'Kraj zamieszkania',
        'Data rejestracji',
        '',
      ]"
    />
  </ViewLayout>
</template>
