<template>
  <div>
    <b-container fluid class="board">
      <b-row>
        <b-col class="current pt-2 pt-md-1 my-4" md="4">
          <search-bar class="mt-5"></search-bar>
          <div class="region pt-4">Lagos, Nigeria</div>
          <div class="text-center">MONDAY, 16:00</div>
          <weather-icon class="current-icon"></weather-icon>

          <div class="temperature text-center">
            <span class="temp-value">12</span>
            <span class="unit"><sup>&#8451;</sup></span>
            <span class="unit" v-if="tempUnit"><sup>&#8457;</sup></span>
          </div>

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam rerum
          labore inventore ullam! Voluptates nobis molestias distinctio eligendi
          dolore? Impedit sunt ipsum modi autem officia incidunt enim
          perferendis, corrupti aliquid.
        </b-col>
        <b-col class="highlight px-md-5 pt-md-5" md="8">
          <b-row class="mb-3 mt-4 mt-md-5">
            <b-col>
              <h5 class="heading heading-1 text-left font-weight-bold">
                Weekly Forecast
              </h5></b-col
            >
            <b-col class="text-right d-none d-md-block">
              <span class="CF-button text-right p-0 mt-3 mb-5">
                <span class="fh mr-3">&#8451;</span>
                <span class="cs">&#8457;</span>
              </span></b-col
            >
          </b-row>

          <div class="main-fcst mt-3">
            <div class="mx-auto mb-4"><forecast /></div>
            <div class="mx-auto mb-4"><forecast /></div>
            <div class="mx-auto mb-4"><forecast /></div>
            <div class="mx-auto mb-4"><forecast /></div>
            <div class="mx-auto mb-4"><forecast /></div>
            <div class="mx-auto mb-4"><forecast /></div>
            <div class="mx-auto mb-4"><forecast /></div>
          </div>

          <div class="today mt-md-4 mb-5">
            <h5 class="heading text-left font-weight-bold mt-4">
              Today's Stats
            </h5>
            <div class="t-stats mt-4">
              <div class="stat">
                <h5>Wind Stats</h5>
                <span class="font-weight-bold w-speed">7.7</span
                ><span class="unt">km/h</span>
                <div class="mt-1">WSW</div>
              </div>
              <div class="stat">
                <h5>Sunrise and Sunset</h5>
                <span class="font-weight-bold w-speed">7.7</span
                ><span class="unt">km/h</span>
                <div class="mt-1">WSW</div>
              </div>
              <div class="stat">
                <h5>Visibility</h5>

                <span class="font-weight-bold w-speed">7.7</span
                ><span class="unt">km/h</span>
                <div class="mt-1">WSW</div>
              </div>
              <div class="stat">
                <h5>Humidity</h5>

                <span class="font-weight-bold w-speed">7.7</span
                ><span class="unt">km/h</span>
                <div class="mt-1">WSW</div>
              </div>
              <div class="stat">
                <h5>UV Index</h5>
                <span class="font-weight-bold w-speed">7.7</span
                ><span class="unt">km/h</span>
                <div class="mt-1">WSW</div>
              </div>
              <div class="stat">
                <h5>Wind Stats</h5>
                <span class="font-weight-bold w-speed">7.7</span
                ><span class="unt">km/h</span>
                <div class="mt-1">WSW</div>
              </div>
            </div>
          </div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti jk
          consectetur quas repellendus numquam impedit error dolorem eveniet.
          Incidunt repudiandae veritatis, minima saepe, recusandae eum facilis
          nulla at reprehenderit expedita facere? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti excepturi aliquid repellendus
          mollitia nisi enim libero iure, accusantium necessitatibus. Itaque ut
          dolorum illum dicta veritatis unde sequi facere iste tenetur? lorem
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod esse,
          reiciendis itaque repellat, tempora ex iure iste qui modi sapiente
          ducimus sunt in? Sit soluta sed totam ut praesentium.
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue'
 */
import searchBar from "@/components/searchBar.vue";
import weatherIcon from "@/components/weather-icon.vue";
import forecast from "@/components/forecast.vue";
export default {
  name: "Home",
  data() {
    return {
      tempUnit: false,
    };
  },
  components: {
    searchBar,
    weatherIcon,
    forecast,
  },
};
</script>
<style lang="scss">
.temp-value {
  font-size: 100px;
  font-family: sans-serif;
  line-height: 0.9;
}

.region {
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
}

.unit {
  font-size: 70px;
}

.highlight {
  background-color: rgb(236, 236, 236);
  right: 0;
  min-height: 100vh;
}

.fh,
.cs {
  border-radius: 50%;
  background-color: rgb(133, 133, 129);
  padding: 9px;
  height: 12px;
  width: 12px;
}

.w-speed {
  font-size: 40px;
}

.unt {
  font-size: 30px;
}

.main-fcst {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
}

.t-stats {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 5px;
  transition: 0.35s ease-out;
}

.stat {
  background-color: white;
  width: 150px;
  padding: 15px 10px;
  margin: 20px auto;
  border-radius: 20px;
  transition: 0.35s ease-out;
  font-size: 17px;
}

.board {
}
@media (min-width: 768px) {
  .current {
    position: fixed !important;
    left: 0;
    z-index: 2;
    margin-top: 55px;
    transition: 0.35s ease-out;
    min-height: 100vh;
  }

  .highlight {
    background-color: rgb(236, 236, 236);
    position: absolute !important;
    right: 0;
    min-height: 100vh;
    transition: 0.35s ease-out;
  }

  .dark {
    .current {
      left: 0;
      z-index: 2;
      margin-top: 55px;
      background: #162736;
      transition: 0.35s ease-out;
    }

    .highlight {
      right: 0;
      min-height: 100vh;
      transition: 0.35s ease-out;
    }
  }
}

@media (max-width: 576px) {
  .main-fcst,
  .heading-1 {
    display: none;
  }
}

/* dark mode styling */

.dark {
  .current {
    .search-bar {
      border: 4px solid rgba(255, 255, 255, 0.427) !important;
      transition: 0.35s ease-out;

      input {
        background-color: rgba(255, 255, 255, 0.8) !important;
        transition: 0.35s ease-out;
      }
    }
  }

  .highlight {
    background-color: rgb(10, 29, 44);
    transition: 0.35s ease-out;

    .stat {
      background: #162736;
      transition: 0.35s ease-out;
    }
  }
}
/*  */
</style>