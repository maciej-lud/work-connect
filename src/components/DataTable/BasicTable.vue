<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

type HeaderType = { title: string; name: string };
type TableDataType = { [key: string]: any };
type SortedColumnType = {
  name: string;
  direction: "asc" | "desc";
};

const emit = defineEmits<{
  (e: "sortColumn", value: SortedColumnType): void;
}>();

defineProps({
  headers: {
    type: Array as PropType<HeaderType[]>,
    default: () => [],
  },
  data: {
    type: Array as PropType<TableDataType[]>,
    default: () => [],
  },
});

const sortedColumn = ref<SortedColumnType>({
  name: "fullName",
  direction: "asc",
});

function handleSortColumnChange(column: string) {
  if (sortedColumn.value.name === column) {
    sortedColumn.value.direction =
      sortedColumn.value.direction === "asc" ? "desc" : "asc";
  } else {
    sortedColumn.value.name = column;
    sortedColumn.value.direction = "asc";
  }
  emit("sortColumn", {
    name: sortedColumn.value.name,
    direction: sortedColumn.value.direction,
  });
}
</script>

<template>
  <table class="table">
    <thead class="table__head">
      <tr class="table__tr">
        <th class="table__th"></th>
        <th
          v-for="header in headers"
          :key="header.name"
          class="table__th cursor-pointer"
          @click="handleSortColumnChange(header.name)"
        >
          <div class="flex">
            {{ header.title }}
            <SvgIcon
              v-if="
                sortedColumn.name === header.name &&
                sortedColumn.direction === 'asc'
              "
              name="sort-arrow-up"
              color="#4d4d4d"
              class="ml-2"
            />
            <SvgIcon
              v-else-if="
                sortedColumn.name === header.name &&
                sortedColumn.direction === 'desc'
              "
              name="sort-arrow-down"
              color="#4d4d4d"
              class="ml-2"
            />
          </div>
        </th>
        <th class="table__th"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id" class="table__tr">
        <td class="table__td">
          <div class="flex justify-center items-center">
            <input class="table__checkbox" type="checkbox" />
          </div>
        </td>
        <td class="table__td">
          <div class="flex items-center">
            <img :src="item.picture" class="table__img" /> {{ item.fullName }}
          </div>
        </td>
        <td class="table__td">{{ item.email }}</td>
        <td class="table__td">{{ item.username }}</td>
        <td class="table__td">
          <div class="flex items-center">
            <img
              :src="`https://flagsapi.com/${item.country}/flat/64.png`"
              class="h-4 mr-2"
            />
            {{ item.country }}
          </div>
        </td>
        <td class="table__td">{{ item.registrationDate }}</td>
        <td class="table__td text-center">
          <SvgIcon name="dots" class="inline-block" />
        </td>
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
  &__img {
    width: 24px;
    height: 24px;
    border-radius: 48px;
    margin-right: 8px;
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
