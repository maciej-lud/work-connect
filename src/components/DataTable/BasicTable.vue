<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
</script>

<template>
  <table class="table">
    <thead class="table__head">
      <tr class="table__tr">
        <th class="table__th"></th>
        <th class="table__th">Imię i nazwisko</th>
        <th class="table__th">Adres email</th>
        <th class="table__th">Nazwa użytkownika</th>
        <th class="table__th">Kraj zamieszkania</th>
        <th class="table__th">Data rejestracji</th>
        <th class="table__th"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="table__tr">
        <td class="table__td text-center">
          <input class="table__checkbox" type="checkbox" />
        </td>
        <td class="table__td">Patryk Polak</td>
        <td class="table__td">testmail@gmail.com</td>
        <td class="table__td">Username placeholder</td>
        <td class="table__td">Polska</td>
        <td class="table__td">22.09.2024, 9:22</td>
        <td class="table__td"><SvgIcon name="dots" /></td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.table {
  width: 100%;
  margin: 32px 0;
  box-shadow: 0 4px 2px 0 rgba(#e0e0e0, 0.25);
  border-bottom: none;
  border-spacing: 0;
  border-collapse: separate;
  &__head {
    background-color: #f6f6f8;
  }
  &__th,
  &__td {
    border-bottom: 1px solid #e1e1e1;
    padding: 24px 12px;
    word-break: break-word;
    hyphens: auto;
  }
  &__th {
    font-size: 12px;
    color: #4d4d4d;
    text-align: left;
  }
  &__td {
    font-size: 16px;
    color: #3d3d3d;
  }
  &__checkbox {
    width: 18px;
    height: 18px;
    border-radius: 5px;
    border: 2px solid #e9e9e9;
    appearance: none;
    cursor: pointer;
    &:checked {
      background-color: #f6f6f8;
      border-color: #e1e1e1;
    }
  }
}
.table__tr:first-child .table__th:first-child {
  border-top-left-radius: 12px;
}
.table__tr:first-child .table__th:last-child {
  border-top-right-radius: 12px;
}
.table__tr:last-child .table__td:first-child {
  border-bottom-left-radius: 12px;
}
.table__tr:last-child .table__td:last-child {
  border-bottom-right-radius: 12px;
}
</style>
