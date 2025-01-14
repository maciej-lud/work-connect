<script setup lang="ts">
import type { PropType } from "vue";

import TableFilters from "@/components/DataTable/TableFilters.vue";
import BasicTable from "@/components/DataTable/BasicTable.vue";
import TablePagination from "@/components/DataTable/TablePagination.vue";

defineProps({
  headers: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
</script>

<template>
  <TableFilters />
  <BasicTable :headers="headers" />
  <TablePagination />
</template>
