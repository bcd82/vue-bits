import { getRate } from "@/services/bitcoin.service";


export const bitcoinModule = {
  state: {
    rate: null
  },
  getters: {
    rate({ rate }) {
      return rate;
    }
  },
  mutations: {
    setRate(state, { rate }) {
      state.rate = rate;
    }
  },
  actions: {
    async getMarketPrice({ commit }) {
      try {
        const rate = await getRate();
        commit({ type: 'setRate', rate })
      } catch (err) {
        console.log('problems with getting rate', err)
      }
    },
    async transfer() {
      if (this.transferAmount <= 0) return;
      try {
        await transferBits(this.contact._id, this.transferAmount);
        this.transferStatus = "Complete";
        this.loadContact();
        this.toggleTransfer();
        this.transferAmount = 0;
      } catch (err) {
        this.transferStatus = "Insufficient funds";
      }
    },
  },

}
