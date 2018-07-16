// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./intro/App";
import BoundInput from "./ex1/BoundInputSolution";
//import BoundInput from "./ex1/BoundInput";
import List from "./ex2/List";
//import List from "./ex2/ListSolution";
//import Feed from "./ex3/FeedSolution";
import Feed from "./ex3/Feed";
import FeedPage from "./ex4/FeedPage";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App, BoundInput, List, Feed, FeedPage },
  template: "<FeedPage/>"
});
