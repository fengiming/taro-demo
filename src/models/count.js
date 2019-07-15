export default {
  state: {
    num: 0
  },
  reducers: {
    increment(state, payload) {
      return {
        ...state,
        num: state.num + payload
      };
    },
    decrement(state, payload) {
      return {
        ...state,
        num: state.num - payload
      };
    }
  },
  effects: {
    async incrementAsync(payload) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      this.increment(payload);
    },
    async decrementAsync(payload) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      this.decrement(payload);
    }
  }
};
