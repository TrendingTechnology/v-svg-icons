import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    iconList: [
      "arrow-circle-up",
      "arrow-alt-circle-up",
      "arrow-circle-right",
      "arrow-alt-circle-right",
      "arrow-circle-left",
      "arrow-alt-circle-left",
      "arrow-circle-down",
      "arrow-alt-circle-down",
      "arrows-alt",
      "arrow-left",
      "arrow-right",
      "arrow-up",
      "arrow-down",
      "github-alt",
      "github-square",
      "github",
      "book",
      "facebook-f",
      "facebook",
      "facebook-square",
      "facebook-messenger",
      "instagram",
      "instagram-square",
      "linkedin-in",
      "linkedin",
      "twitter",
      "twitter-square",
      "stack-overflow",
      "hashtag",
      "user-regular",
      "user",
      "user-friends",
      "users",
      "users-slash",
      "user-slash",
      "mail-bulk",
      "envelope-open-regular",
      "envelope-open-text",
      "envelope",
      "envelope-regular",
      "paper-plane",
      "paper-plane-regular",
      "angle-down",
      "angle-left",
      "angle-right",
      "angle-up",
      "angle-double-down",
      "angle-double-left",
      "angle-double-right",
      "angle-double-up"
    ],
    githubRepo: "https://github.com/mehmetsagir/v-svg-icons"
  },
  getters: {
    countIcons(state) {
      return state.iconList.length;
    }
  }
});
