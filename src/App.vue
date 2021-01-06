<template>
  <div class="app" :class="mode">
    <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <navbar class="nav-bar" />
<toggle :mode="mode" @toggle="toggle"/>
    <router-view />
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import toggle from "@/components/toggle.vue"
export default {
  data() {
    return {
      mode: "light",
    };
  },
  components: {
    navbar,toggle
  },
   methods: {
    toggle(){
if (this.mode === "dark"){
   this.mode="light"
}
else{
  this.mode="dark";
}
    }
  },
};
</script>
<style lang="scss">
.app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
              transition: 0.35s ease-out;

}

.dark {
  background: #162736;
  color:rgba(255, 255, 255, 0.6);
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


.dark{

}

</style>
