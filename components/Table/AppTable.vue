<template>
  <div>
    <table-caption></table-caption>
    <div class="table">
      <table-header></table-header>
      <div class="table__body">
        <table-filter></table-filter>
        <table-body></table-body>
      </div>
    </div>
  </div>
</template>
<script>
import TableCaption from "./Caption/TableCaption";
import TableBody from "./Body/TableBody";
import TableFilter from "./Filter/TableFilter";
export default {
  name: "AppTable",
  components: {
    TableBody,
    TableFilter,
    TableCaption
  },
};
</script>
<style scoped lang="scss">
.table {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
