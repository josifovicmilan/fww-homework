<template>
  <div class="table__header">
    <heading-item :headerText="'fullName'"></heading-item>
    <heading-item :headerText="'balance'"></heading-item>
    <heading-item :headerText="'isActive'"></heading-item>
    <heading-item :headerText="'registered'"></heading-item>
    <heading-item :headerText="'state'"></heading-item>
    <heading-item :headerText="'country'"></heading-item>
  </div>
</template>

<script>
  import HeadingItem from "../Utility/HeadingItem";
    export default {
        name: "TableHeader",
      components:{
          HeadingItem
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
