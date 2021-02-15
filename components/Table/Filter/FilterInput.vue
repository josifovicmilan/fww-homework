<template>
    <input
      @keydown="filterSelect($event)"
      class="table__filter-input"
      type="text"
      :placeholder="placeholderText"
    />
</template>

<script>
    export default {
      name: "FilterInput",
      props: ['filterBy', 'placeholderText'],
      emits: ['filterSelect'],
      methods: {
        filterSelect(event) {
          this.$emit('filterSelect', event, this.filterBy);
        }
      }
    }
</script>

<style scoped lang="scss">
  .table__filter-input {
    width: 90%;
    font-family: inherit;
    outline: none;
    border: 0.1rem solid $color-blue;
    padding: 0.3rem 0.3rem;
  }
</style>
