<script setup lang="ts">
import { ref, onMounted } from "vue";
import ViewLayout from "@/layouts/ViewLayout.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
import DataTable from "@/components/DataTable/DataTable.vue";

type User = {
  id: string;
  fullName: string;
  picture: string;
  email: string;
  username: string;
  country: string;
  registrationDate: string;
};

const users = ref<User[]>([]);
const isLoading = ref<boolean>(true);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?results=1005&inc=picture,name,email,login,nat,registered"
    );
    const data = await response.json();
    users.value = data.results.map((user: any) => ({
      id: user.login.uuid,
      fullName: `${user.name.first} ${user.name.last}`,
      picture: user.picture.thumbnail,
      email: user.email,
      username: user.login.username,
      country: user.nat,
      registrationDate: new Date(user.registered.date).toLocaleString(),
    }));
  } finally {
    isLoading.value = false;
  }
});
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
      v-if="!isLoading"
      :headers="[
        '',
        'Imię i nazwisko',
        'Adres email',
        'Nazwa użytkownika',
        'Kraj zamieszkania',
        'Data rejestracji',
        '',
      ]"
      :data="users"
    />
    <div v-else>Ładowanie danych...</div>
  </ViewLayout>
</template>
