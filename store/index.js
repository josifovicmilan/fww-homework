export const state = () => ({
  countries: [],
  states: [],
  users: [],
  filters: [],
  paginationValues: [10, 20, 50],
  currentPage: 1,
  perPage: 10,
});
export const actions = {
  async nuxtServerInit(vuexContext, context) {
    await context.app.$axios
      .$get("https://fww-demo.herokuapp.com/")
      .then((data) => {
        vuexContext.commit("loadAllUsers", {
          data: data,
        });
      });
  },
};
export const mutations = {
  loadAllUsers(state, data) {
    data.data.forEach((countryItem) => {
      state.countries.push({value:countryItem.country});
      countryItem.state.forEach((stateItem) => {
        state.states.push({value : stateItem.name});
        stateItem.users.forEach((user) => {
          state.users.push({
            id: user.id,
            fullName: user.fullName,
            balance: user.balance,
            isActive: user.isActive,
            registered: new Date(user.registered),
            country: countryItem.country,
            state: stateItem.name,
          });
        });
      });
    });
    state.countries.sort((a,b) => a.value> b.value ? 1 : -1);
    state.states.sort((a,b) => a.value> b.value ? 1 : -1)
    state.pageCount = Math.ceil(state.users.length / state.perPage);
  },
  sort(state, options) {
    if (options.direction === "desc") {
      state.users.sort((a, b) =>
        a[options.orderBy] > b[options.orderBy] ? -1 : 1
      );
    } else {
      state.users.sort((a, b) =>
        a[options.orderBy] > b[options.orderBy] ? 1 : -1
      );
    }
  },
  addOrEditFilter(state, flt) {
    const index = state.filters.findIndex(
      (item) => item.filterBy === flt.filterBy
    );
    if (index === -1) {
      state.filters.push({
        filterBy: flt.filterBy,
        value: flt.value,
      });
    } else {
      state.filters[index].value = flt.value;
    }
  },
  removeFilter(state, flt) {
    const index = state.filters.findIndex((item) => item.filterBy === flt.filterBy);
    if(index === -1) return;
    state.filters.splice(index, 1);
  },
  setDisplayPerPage(state, perPage) {
    state.perPage = perPage;
  },
  updatePage(state, pageNumber) {
    state.currentPage = pageNumber;
  },
};
export const getters = {
  getPaginationValues(state) {
    return state.paginationValues;
  },
  filteredUsers(state) {
    if (state.filters.length === 0) {
      return {
        users: state.users.slice(
          (state.currentPage - 1) * state.perPage,
          state.currentPage * state.perPage
        ),
        userCount: state.users.length,
      };
    }
    const users = state.users.filter((user) => {
      return state.filters.every((flt) => {
        if (flt.filterBy === "fullName") {
          return user[flt.filterBy].includes(flt.value);
        } else if (flt.filterBy === "balance") {
          return Number(
            user[flt.filterBy].replace(/[^0-9.-]+/g, "").includes(flt.value)
          );
        } else if (flt.filterBy === "fromDate") {
          return user.registered.getTime() >= Date.parse(flt.value);
        } else if (flt.filterBy === "toDate") {
          return user.registered.getTime() <= Date.parse(flt.value);
        } else {
          return user[flt.filterBy].toString() === flt.value;
        }
      });
    });
    return {
      users: users.slice(
        (state.currentPage - 1) * state.perPage,
        state.currentPage * state.perPage
      ),
      userCount: users.length,
    };
  },
  users: (state) => state.users,
  countries: (state) => state.countries,
  states: (state) => state.states,
  perPage: (state) => state.perPage,
  currentPage: (state) => state.currentPage,
};
