<template>
  <div>
    <form @submit.prevent="onSubmit" class="search-bar" action="">
      <input
        type="text"
        placeholder="Search for places..."
        v-model="location"
      />
      <!--   <i class="fa fa-search"></i>
 -->
      <loader v-if="loading" />

      <b-icon
        icon="search"
        class="fa fa-search"
        v-on:click="onSubmit()"
      ></b-icon>
    </form>
    <div class="error" v-if="error == 'Invalid location'">
      <p class="text-danger">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import loader from "@/components/loader.vue";

import { mapActions } from "vuex";
/*  import axios from 'axios'
 */ export default {
  name: "searchBar",
  data() {
    return {
      location: "",
      point: {},
      long: 3.3941795,
      lat: 6.4550575,
      name: "",
      loading: false,
      error: "",
    };
  },
  components: {
    loader,
  },
  props: {},
  methods: {
    ...mapActions(["fetchWeather"]),

    async onSubmit() {
      var location = `${encodeURIComponent(this.location)}`;
      console.log(location);

      this.loading = true;
      try {
        let response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=a81962bde9cb4591ad703a830a1bf74c&pretty=1`
        );
        this.point = await response.json();
        console.log(this.point);

        this.setResults(this.point);

        this.fetchWeather([this.lat, this.long, this.name]);

        setTimeout(this.load, 900);
      } catch (error) {
        console.log(error);
        this.error = "Invalid location";
        console.log(this.error);
        setTimeout(this.load, 900);

        setTimeout(this.mistake, 4000);
      }
    },
    setResults(point) {
      this.lat = point.results[0].geometry.lat;
      this.long = point.results[0].geometry.lng;
      this.name = point.results[0].formatted;
      console.log(this.lat);
    },
    load() {
      this.loading = false;
    },
    mistake(){
      this.error=null
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.search-bar {
  position: relative;
  transition: all 1s;
  max-width: 450px;
  margin: auto;
  height: 50px;
  box-sizing: border-box;
  border-radius: 25px;
  border: 4px solid white;
  padding: 5px;
  cursor: pointer;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: block;
    font-size: 19px;
    border-radius: 20px;
    padding: 0px 44px 0px 20px;
    background: #e7e7e7;
  }
}

.fa {
  box-sizing: border-box;
  padding: 10px;
  width: 42.5px;
  height: 42.5px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: #fefeff;
  text-align: center;
  font-size: 1.2em;
  transition: all 1s;
  background: #07051a;
  color: white;
}

/* form:hover{
    width: 200px;
    cursor: pointer;
} */

/* form:hover input{
    display: block;
} */

form .fa:hover {
  background: #07051a;
  color: white;
  transform: scale(1.15);
}

.error p{
  background-color:black;
  width: 150px;
  text-align:center;
  font-size:17px;
  margin:auto;
  border-radius:15px;
  margin-bottom:-26px;
}
.dark {
  .search-bar {
    border: 4px solid rgba(255, 255, 255, 0.427);
    transition: 0.35s ease-out;
    input {
      background-color: rgba(255, 255, 255, 0.8);
      transition: 0.35s ease-out;
    }
  }
}
/* dark mode styling */

/*  */
</style>
