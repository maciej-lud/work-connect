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

const itemsPerPage = ref<number>(10);
const currentPage = ref<number>(1);

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return props.data.slice(startIndex, endIndex);
});

const handleItemsPerPage = (newItemsPerPage: number) => {
  itemsPerPage.value = newItemsPerPage;
  currentPage.value = 1;
};

const handlePageChange = (newPage: number) => {
  currentPage.value = newPage;
};
</script>

<template>
  <TableFilters />
  <BasicTable :headers="headers" :data="paginatedData" />
  <TablePagination
    :dataLength="props.data.length"
    :itemsPerPage="itemsPerPage"
    :currentPage="currentPage"
    @itemsPerPage="handleItemsPerPage"
    @pageChange="handlePageChange"
  />
</template>
