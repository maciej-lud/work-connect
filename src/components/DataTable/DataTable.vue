<script setup lang="ts">
import { ref, computed } from "vue";
import type { PropType } from "vue";
import TableFilters from "@/components/DataTable/TableFilters.vue";
import BasicTable from "@/components/DataTable/BasicTable.vue";
import TablePagination from "@/components/DataTable/TablePagination.vue";

type HeaderType = { title: string; name: string };
type TableDataType = {
  [key: string]: any;
};
type SortedColumnType = {
  name: string;
  direction: "asc" | "desc";
};

const props = defineProps({
  headers: {
    type: Array as PropType<HeaderType[]>,
    default: () => [],
  },
  data: {
    type: Array as PropType<TableDataType[]>,
    default: () => [],
  },
});

const searchValue = ref<string>("");
const sortedColumn = ref<SortedColumnType>({
  name: "fullName",
  direction: "asc",
});
const itemsPerPage = ref<number>(10);
const currentPage = ref<number>(1);

const filteredData = computed(() => {
  return props.data.filter((item) =>
    item.fullName.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});

const sortedData = computed(() => {
  const sorted = [...filteredData.value].sort((a, b) => {
    const valueA = a[sortedColumn.value.name];
    const valueB = b[sortedColumn.value.name];
    if (valueA < valueB) {
      return sortedColumn.value.direction === "asc" ? -1 : 1;
    } else if (valueA > valueB) {
      return sortedColumn.value.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  return sorted;
});

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return sortedData.value.slice(startIndex, endIndex);
});

function handleSearchValueChange(value: string) {
  searchValue.value = value;
}

function handleSortColumnChange(column: SortedColumnType) {
  sortedColumn.value = column;
}

function handleItemsPerPageChange(newItemsPerPage: number) {
  itemsPerPage.value = newItemsPerPage;
  currentPage.value = 1;
}

const handlePageChange = (newPage: number) => (currentPage.value = newPage);
</script>

<template>
  <TableFilters @searchValue="handleSearchValueChange" />
  <BasicTable
    :headers="props.headers"
    :data="paginatedData"
    @sortColumn="handleSortColumnChange"
  />
  <TablePagination
    :dataLength="filteredData.length"
    :itemsPerPage="itemsPerPage"
    :currentPage="currentPage"
    @itemsPerPage="handleItemsPerPageChange"
    @pageChange="handlePageChange"
  />
</template>
