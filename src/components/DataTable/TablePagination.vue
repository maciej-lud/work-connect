<template>
  <div class="pagination">
    <div class="pagination__navigation">
      <span class="pagination__text">Pozycji na stronie:</span>
      <select class="pagination__select">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
    </div>
    <div class="pagination__navigation">
      <span class="pagination__text">Strona 1 z 3</span>
      <div class="pagination__buttons">
        <button class="pagination__button"><</button>
        <button class="pagination__button">1</button>
        <button class="pagination__button">2</button>
        <button class="pagination__button">3</button>
        <button class="pagination__button">></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  &__text {
    color: #656565;
    letter-spacing: -1%;
  }
  &__select {
    line-height: 2.2;
    padding: 10px 16px;
    margin-left: 12px;
  }
  &__navigation {
    display: flex;
    align-items: center;
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
