export const state = () => ({
  partials: {}
});

export const mutations = {
  setPartials(state, partials) {
    state.partials = partials;
  }
};

export const actions = {
  async load({ commit }) {
    const partials = (await this.$prismic.api.getSingle("partials")).data;
    commit("setPartials", partials);
    console.log("loaded");
  }
};
