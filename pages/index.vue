<template>
  <div>
    <app-table></app-table>
    <app-pagination></app-pagination>
  </div>

</template>

<script>
  import AppTable from "../components/Table/AppTable";
  import AppPagination from "../components/Pagination/AppPagination";
export default {
  components:{
    AppTable,
    AppPagination
  }
}
</script>

