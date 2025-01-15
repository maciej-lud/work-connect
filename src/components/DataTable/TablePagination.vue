<script setup lang="ts">
import SelectInput from "@/components/SelectInput.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import { computed } from "vue";

const props = defineProps({
  dataLength: {
    type: Number,
    default: 0,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits<{
  (e: "itemsPerPage", value: number): void;
  (e: "pageChange", value: number): void;
}>();

const totalPages = computed(() =>
  Math.ceil(props.dataLength / props.itemsPerPage)
);

function handleItemsPerPageChange(value: string) {
  emit("itemsPerPage", parseInt(value, 10));
}

function handlePageChange(page: number) {
  if (page >= 1 && page <= totalPages.value) emit("pageChange", page);
}

const visiblePageButtons = computed(() => {
  if (totalPages.value <= 3) {
    return Array.from({ length: totalPages.value }, (_, i) => i + 1);
  } else if (props.currentPage === 1) {
    return [1, 2, 3];
  } else if (props.currentPage === totalPages.value) {
    return [totalPages.value - 2, totalPages.value - 1, totalPages.value];
  }
  const start = Math.max(props.currentPage - 1, 1);
  const end = Math.min(props.currentPage + 1, totalPages.value);
  return [start, props.currentPage, end];
});
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <span class="pagination__text">Pozycji na stronie:</span>
      <SelectInput
        :options="['10', '25', '50', '100', '200']"
        :defaultValue="String(itemsPerPage)"
        class="ml-3"
        @update:selected="handleItemsPerPageChange"
      />
    </div>
    <div class="flex items-center">
      <span class="pagination__text">
        Strona {{ currentPage }} z {{ totalPages }}
      </span>
      <div class="pagination__buttons">
        <button
          class="pagination__button"
          :disabled="currentPage === 1"
          @click="handlePageChange(currentPage - 1)"
        >
          <SvgIcon
            name="arrow-left"
            :color="currentPage === 1 ? '#CDCDCD' : '#000'"
          />
        </button>
        <button
          v-for="page in visiblePageButtons"
          :key="page"
          class="pagination__button"
          :class="{ 'pagination__button--active': page === currentPage }"
          @click="handlePageChange(page)"
        >
          {{ page }}
        </button>
        <button
          class="pagination__button"
          :disabled="currentPage === totalPages"
          @click="handlePageChange(currentPage + 1)"
        >
          <SvgIcon
            name="arrow-right"
            :color="currentPage === totalPages ? '#CDCDCD' : '#000'"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  &__text {
    color: #656565;
    letter-spacing: -1%;
  }
  &__buttons {
    display: flex;
    gap: 6px;
    margin: 0 18px 0 42px;
  }
  &__button {
    color: #4d4d4d;
    line-height: 2.2;
    padding: 10px 18px;
    &--active {
      color: #fff;
      background-color: #0040e0;
    }
  }
}
</style>
