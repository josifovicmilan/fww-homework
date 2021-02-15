<template>
    <ul class="table__list">
      <li class="table__list-item">{{ user.fullName }}</li>
      <li class="table__list-item">{{ user.balance }}</li>
      <li class="table__list-item" ><span :class="{active: user.isActive, inactive: !user.isActive }">{{ user.isActive ? 'active' : 'inactive' }}</span></li>
      <li class="table__list-item">{{ timestamp(user.registered) }}</li>
      <li class="table__list-item">{{ user.state }}</li>
      <li class="table__list-item">{{ user.country }}</li>
    </ul>
</template>

<script>
    import moment from "moment";

    export default {
        props: ['user'],
        name: "TableItem",
      methods: {
        timestamp(date){
          return moment(date).format("DD.MM.YYYY")
        }
      }
    }
</script>

<style scoped lang="scss">
  .active,.inactive{
    display: block;
    width: 50%;
    margin: auto;
    text-align: center;
    color: $color-white;
    padding: .3rem;
    border-radius: .6rem;
  }
  .active{
    background-color: $color-green;
  }
  .inactive{
    background-color: $color-red;
  }
  .table__list{
    list-style-type: none;
    display: flex;
    flex-direction: row;

    &:nth-child(odd){
      background-color: $color-grey-light-1;
    }
    &:last-child{
      border-bottom: .2rem solid $color-blue;
    }
  &-item {
    width: 15%;
    padding: 0.4rem 0.4rem;
    margin-right: 0.5rem;
    color: $color-grey-dark-3;
    font-size: 0.9rem;

  }
  }
</style>
