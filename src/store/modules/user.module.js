import { userService } from '@/services/user.service'

export const userModule = {
  state: {
    loggedInUser: null
  },
  getters: {
    loggedInUser({ loggedInUser }) {
      return loggedInUser
    }
  },
  mutations: {
    setLoggedInUser(state, { user }) {
      state.loggedInUser = user
    }
  },
  actions: {
    async login({ commit }, { creds }) {
      try {
        const user = await userService.login(creds);
        if (user) commit({ type: 'setLoggedInUser', user })
      }
      catch (err) {
        console.log('user doesnt exist', err)
      }
    },
    async logout({ commit }) {
      await userService.logout();
      commit({ type: 'setLoggedInUser', user: null })
    },
    async loadUser({ commit }) {
      try {
        const user = await userService.getUser();
        commit({ type: 'setLoggedInUser', user })
      } catch (err) {
        console.log('error', err);
      }
    },
  },
}
