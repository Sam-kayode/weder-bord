<template>
  <div class="app" :class="mode">
    <navbar class="nav-bar" />
    <toggle :mode="mode" @toggle="toggle" />
    <router-view />
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import toggle from "@/components/toggle.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      mode: "light",
    };
  },
  components: {
    navbar,
    toggle,
  },
  methods: {
        ...mapActions(["fetchWeather"]),

    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },

  } ,
   async mounted() {
    this.fetchWeather([6.4550575, 3.3941795, "Lagos,Nigeria"]);
  },
 
};
</script>
<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: 0.35s ease-out;
  overflow-x: hidden;
}

.dark {
  background: #162736;
  color: rgba(255, 255, 255, 0.6);
  transition: 0.35s ease-out;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dark {
}
</style>
