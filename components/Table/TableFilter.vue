<template>
  <div class="table__filter">
    <filter-item>
      <filter-input
        :filterBy="'fullName'"
        @filterSelect="filterSelect"
        :placeholderText="'Start typing name'"
      ></filter-input>
    </filter-item>
    <filter-item>
      <filter-input
        :filterBy="'balance'"
        @filterSelect="filterSelect"
        :placeholderText="'Start typing balance'"
      ></filter-input>
    </filter-item>
    <filter-item>
      <filter-option
        :filterBy="'isActive'"
        @filterSelect="filterSelect"
        :options="activeStates"
      ></filter-option>
    </filter-item>
    <filter-item>
      <div class="table__filter-date">
        <filter-date
          :filterBy="'fromDate'"
          @filterSelect="filterSelect"
        ></filter-date>
        <filter-date
          :filterBy="'toDate'"
          @filterSelect="filterSelect"
        ></filter-date>
      </div>
    </filter-item>
    <filter-item>
      <filter-option
        :filterBy="'state'"
        :options="[{ value: '' }, ...states]"
        @filterSelect="filterSelect"
      ></filter-option>
    </filter-item>

    <filter-item>
      <filter-option
        :filterBy="'country'"
        :options="[{ value: '' }, ...countries]"
        @filterSelect="filterSelect"
      ></filter-option>
    </filter-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FilterInput from "../Utility/FilterInput";
import FilterOption from "../Utility/FilterOption";
import FilterDate from "../Utility/FilterDate";
import FilterItem from "../Utility/FilterItem";
export default {
  name: "TableFilter",
  components: {
    FilterItem,
    FilterInput,
    FilterOption,
    FilterDate,
  },
  data() {
    return {
      activeStates: [
        {
          value: null,
          text: "",
        },
        {
          value: true,
          text: "active",
        },
        {
          value: false,
          text: "inactive",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      countries: "countries",
      states: "states",
    }),
  },
  methods: {
    filterSelect(event, filterBy) {
      if (event.target.value === null || event.target.value === "") {
        this.$store.commit("removeFilter", {
          filterBy: filterBy,
          value: event.target.value,
        });
      } else {
        this.$store.commit("addOrEditFilter", {
          filterBy: filterBy,
          value: event.target.value,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.table__filter {
  display: flex;
  background-color: $color-grey-light-1;
  align-items: center;
  border-bottom: 0.2rem solid $color-blue;
  &-date {
    display: flex;
    flex-direction: column;
  }
}
</style>
