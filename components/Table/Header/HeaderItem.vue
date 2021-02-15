<template>
  <div class="table__header-item">
    <span class="table__header-text">{{ headerText }}</span>
    <div class="table__icon">
      <svg class="table__icon-up" @click="sort(headerText, 'asc')">
        <use xlink:href="@/assets/img/stripe.svg#icon-play3"></use>
      </svg>
      <svg class="table__icon-down" @click="sort(headerText, 'desc')">
        <use xlink:href="@/assets/img/stripe.svg#icon-play3"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadingItem",
  props: ["headerText"],
  methods:{
    sort(orderBy, direction){
      return this.$store.commit('sort',{
        orderBy: orderBy,
        direction: direction
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .table__header-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15%;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-right: 0.5rem;
    padding: 0 0.4rem;
    &:not(:last-child) {
      border-right: 0.1rem solid white;
    }
  }

.table__icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-up,
  &-down {
    fill: $color-grey-light-1;
    height: 1rem;
    width: 1.2rem;
    cursor: pointer;

    &:hover {
      fill: $color-grey-dark-1;
    }
  }

  &-up {
    transform: rotate(-90deg);
  }

  &-down {
    transform: rotate(90deg);
  }
}
</style>
