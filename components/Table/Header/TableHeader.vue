<template>
  <div class="table__header">
    <header-item :headerText="'fullName'"></header-item>
    <header-item :headerText="'balance'"></header-item>
    <header-item :headerText="'isActive'"></header-item>
    <header-item :headerText="'registered'"></header-item>
    <header-item :headerText="'state'"></header-item>
    <header-item :headerText="'country'"></header-item>
  </div>
</template>

<script>
  import HeaderItem from "./HeaderItem";
    export default {
        name: "TableHeader",
      components:{
          HeaderItem
      }
    }
</script>

<style scoped lang="scss">
  .table__header {
    display: flex;
    background-color: $color-blue-1;
    color: $color-white;
    border-radius: 1rem 1rem 0 0;
    height: 4rem;
  }
</style>
