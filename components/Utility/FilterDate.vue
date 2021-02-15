<template>
    <input
      @change="filterSelect($event)"
      class="table__filter-input"
      type="date"
    />
</template>

<script>
    export default {
        name: "FilterDate",
        props:['filterBy'],
        emits: ['filterSelect'],
        methods:{
          filterSelect(event){
            this.$emit('filterSelect', event, this.filterBy)
          }
        }
    }
</script>

<style scoped lang="scss">
  .table__filter-date {
    display: flex;
    flex-direction: column;
    input {
      margin-top: 0.3rem;
      width: 90%;
      font-family: inherit;
      color: $color-grey-dark-1;
      border: .1rem solid $color-blue;
      padding: .3rem .3rem;
    }
  }
</style>
