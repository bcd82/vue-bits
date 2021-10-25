import { contactService } from "@/services/contact.service";


export const contactModule = {
  state: {
    contacts: null
  },
  getters: {
    contacts(state) {
      return state.contacts;
    }
  },
  mutations: {
    setContacts(state, {contacts}) {
      state.contacts = contacts;
    }
  },
  actions: {
    async loadContacts({ commit }, { filterBy }) {
      const contacts = await contactService.query(filterBy);
      commit({ type: 'setContacts', contacts })
    },
  },
}
