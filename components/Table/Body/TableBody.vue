<template>
  <div class="table__body">
    <body-item v-for="user in users.users" :user="user" :key="user.id"></body-item>
  </div>
</template>

<script>
import BodyItem from "./BodyItem";
export default {
  name: "TableBody",
  components: {
    BodyItem,
  },
  computed: {
    users() {
      return this.$store.getters["filteredUsers"];
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
