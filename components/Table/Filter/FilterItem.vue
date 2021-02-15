<template>
    <div class="table__filter-item">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FilterItem"
    }
</script>

<style scoped lang="scss">
.table__filter-item{
  width: 15%;
  margin-right: .5rem;
  padding: 0 0.4rem;
}
</style>
