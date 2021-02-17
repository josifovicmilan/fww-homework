<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item">
        <button
          class="pagination__button"
          @click="setPageNumber(1)"
          :disabled="isInFirstPage"
          :class="{ disabled: isInFirstPage }"
        >
          First
        </button>
      </li>
      <li class="pagination__item">
        <button
          class="pagination__button"
          @click="setPageNumber(currentPage - 1)"
          :class="{ disabled: isInFirstPage }"
        >
          Prev
        </button>
      </li>
      <li class="pagination__item" v-for="page in pages" :key="page.name">
        <button
          :disabled="page.isDisabled"
          @click="setPageNumber(page.name)"
          class="pagination__button"
          :class="{ disabled: page.isDisabled }"
        >
          {{ page.name }}
        </button>
      </li>
      <li class="pagination__item">
        <button
          class="pagination__button"
          @click="setPageNumber(currentPage + 1)"
          :disabled="isInLastPage"
          :class="{ disabled: isInLastPage }"
        >
          Next
        </button>
      </li>
      <li class="pagination__item">
        <button
          class="pagination__button"
          @click="setPageNumber(numOfPages)"
          :disabled="isInLastPage"
          :class="{ disabled: isInLastPage }"
        >
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppPagination",
  data() {
    return {
      maxVisibleButtons: 3,
    };
  },
  methods: {
    setPageNumber(pageNumber) {
      this.$store.commit("updatePage", pageNumber);
    },
  },
  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.numOfPages;
    },
    startPage() {
      //first page
      if (this.currentPage === 1) {
        return 1;
      }
      //last page
      if (this.currentPage === this.numOfPages) {
        return this.numOfPages - this.maxVisibleButtons;
      }
      //between
      return this.currentPage - 1;
    },
    pages() {
      const range = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.numOfPages);
        i++
      ) {
        if (i > 0) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage,
          });
        }
      }
      return range;
    },
    numOfPages() {
      return Math.ceil(this.totalNumberOfUsers.userCount / this.perPage);
    },
    ...mapGetters({
      currentPage: "currentPage",
      perPage: "perPage",
      totalNumberOfUsers: "filteredUsers",
    }),
  },
};
</script>

<style scoped lang="scss">
.pagination {
  background-color: $color-grey-light-1;
  margin: 2rem;
  &__list {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
  &__button {
    padding: 0.3rem 0.3rem;
    font-size: 0.9rem;
    font-family: inherit;
    border: 0.1rem solid $color-blue;
    background-color: $color-white;
    color: $color-blue;
    cursor: pointer;
  }
}
.disabled {
  color: $color-grey-light-2;
  cursor: not-allowed;
}
</style>
