<template>
  <div class="table__body">
    <table-item v-for="user in users.users" :user="user" :key="user.id"></table-item>
  </div>
</template>

<script>
import TableItem from "./TableItem";
export default {
  name: "TableBody",

  components: {
    TableItem,
  },
  computed: {
    users() {
      return this.$store.getters["filteredUsers"];
    },
    perPage(){
      return this.$store.getters['perPage'];
    },
    currentPage(){
      return this.$store.getters['currentPage']
    },
  },
};
</script>

<style scoped lang="scss">
.table__body {
  background-color: $color-white;
  display: flex;
  flex-direction: column;
}
</style>
