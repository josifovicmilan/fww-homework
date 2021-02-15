<template>
    <select
      @change="filterSelect($event)"
      class="table__filter-select"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">{{option.value}}</option>
    </select>
</template>

<script>
    export default {
        name: "FilterSelect",
        props: ['options','filterBy'],
        emits: ['filterSelect'],
        methods:{
          filterSelect(event){
            this.$emit('filterSelect', event, this.filterBy)
          }
        }
    }
</script>

<style scoped lang="scss">
  .table__filter-select {
    width: 90%;
    font-family: inherit;
    outline: none;
    border: 0.1rem solid $color-blue;
    padding: 0.3rem 0.3rem;
  }
</style>
