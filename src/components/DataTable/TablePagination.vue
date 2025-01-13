<script setup lang="ts">
import SelectInput from "@/components/SelectInput.vue";
import SvgIcon from "@/components/SvgIcon.vue";
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <span class="pagination__text">Pozycji na stronie:</span>
      <SelectInput :options="['10', '25', '50', '100', '200']" class="ml-3" />
    </div>
    <div class="flex items-center">
      <span class="pagination__text">Strona 1 z 3</span>
      <div class="pagination__buttons">
        <button class="pagination__button">
          <SvgIcon name="arrow-left" />
        </button>
        <button class="pagination__button">1</button>
        <button class="pagination__button">2</button>
        <button class="pagination__button">3</button>
        <button class="pagination__button">
          <SvgIcon name="arrow-right" />
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
  }
}
</style>
