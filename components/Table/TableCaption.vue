<template>
  <div class="caption">
    <h1 class="caption__h1">Fww homework</h1>
    <select class="caption__select" name="pagination" id="pagination"  @change="changeDisplayPerPage($event)">
      <option v-for="value in pagination" :value="value" :key="value">{{value}}</option>
    </select>
  </div>
</template>

<script>
    export default {
        name: "TableCaption",
        computed:{
          pagination(){
            return this.$store.getters['getPaginationValues']
          }
        },
      methods:{
          changeDisplayPerPage(event){
            this.$store.commit('setDisplayPerPage', event.target.value)
            this.$store.commit('updatePage', 1);
          }
      }
    }
</script>

<style scoped lang="scss">
  .caption{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  &__h1{
     display: block;
     color: $color-blue;
      margin-left: .4rem;
   }
    &__select{
      outline: none;
      font: inherit;
      font-size: .9rem;
      margin-right: .4rem;
      padding: .4rem;
      border: none;
      border: 0.1rem solid $color-blue-1;

    }
  }
</style>
