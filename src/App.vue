<template>
  <div id="app">
    <router-view/>
    <main-tab-bar class="main-tab-bar"/>
  </div>
</template>

<script>

import MainTabBar from "./components/content/maintabbar/MainTabBar";
import Vue from 'vue'

Vue.prototype.$bus = new Vue();

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";

.main-tab-bar{
  z-index: 9999;
}
</style>
