<script setup lang="ts">
import { ref, computed } from "vue";
import type { PropType } from "vue";
import TableFilters from "@/components/DataTable/TableFilters.vue";
import BasicTable from "@/components/DataTable/BasicTable.vue";
import TablePagination from "@/components/DataTable/TablePagination.vue";

type TableDataType = {
  [key: string]: any;
};

const props = defineProps({
  headers: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  data: {
    type: Array as PropType<TableDataType[]>,
    default: () => [],
  },
});

const searchValue = ref<string>("");
const itemsPerPage = ref<number>(10);
const currentPage = ref<number>(1);

const filteredData = computed(() => {
  return props.data.filter((item) =>
    item.fullName.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return filteredData.value.slice(startIndex, endIndex);
});

const handleSearchValueChange = (value: string) => (searchValue.value = value);

const handleItemsPerPageChange = (newItemsPerPage: number) => {
  itemsPerPage.value = newItemsPerPage;
  currentPage.value = 1;
};

const handlePageChange = (newPage: number) => (currentPage.value = newPage);
</script>

<template>
  <TableFilters @searchValue="handleSearchValueChange" />
  <BasicTable :headers="props.headers" :data="paginatedData" />
  <TablePagination
    :dataLength="filteredData.length"
    :itemsPerPage="itemsPerPage"
    :currentPage="currentPage"
    @itemsPerPage="handleItemsPerPageChange"
    @pageChange="handlePageChange"
  />
</template>
