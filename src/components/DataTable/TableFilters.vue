<template>
  <input class="search-input" placeholder="Wyszukaj użytkownika..." />
  <button class="sort-button">Sortuj od: Imię i nazwisko</button>
</template>

<style lang="scss" scoped>
.search-input,
.sort-button {
  box-shadow: 0 4px 2px 0 rgba(#e0e0e0, 0.25);
}
.search-input {
  padding: 14px 24px 15px;
  margin-right: 12px;
  color: #878787;
}
.sort-button {
  padding: 14px 20px;
}
</style>
