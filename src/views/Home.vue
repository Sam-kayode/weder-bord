<template>
  <div class="home">
      <b-container fluid class="board" v-if="weather" >
        <b-row>
          <b-col class="current pt-2 pt-md-1 my-4" md="4">
            <search-bar class="mt-5"></search-bar>

            <div class="region pt-4">{{ weather.name }}</div>
            <h5 class="text-center font-weight-bold">
              {{ weather.current.dt | dateConvFull }} 
            </h5>
            <!--    <div class="region pt-4">Lagos,Nieria</div>
 -->

            <weather-icon class="current-icon"></weather-icon>
            <!-- to be reviewed -->

            <div class="temperature text-center">
              <span class="temp-value">
                <span v-if="weather != undefined">{{
                  Math.round(weather.current.temp)
                }}</span>
              </span>
              <span class="unit"><sup>&#8451;</sup></span>
              <span class="unit" v-if="tempUnit"><sup>&#8457;</sup></span>
            </div>

            <p class="font-weight-bolder">
              Feels like {{ Math.round(weather.current.feels_like) }}&#8451;
            </p>

            <p class="font-weight-bolder">
              {{ weather.current.weather[0].description }}
            </p>
          </b-col>
          <b-col class="highlight px-md-5 pt-md-5" md="8">
            <b-row class="mb-3 mt-4 mt-md-5">
              <b-col>
                <h5 class="heading heading-1 text-left font-weight-bold">
                  Weekly Forecast
                </h5></b-col
              >
              <b-col class="text-right d-none d-md-block">
                <!--  <span class="CF-button text-right p-0 mt-3 mb-5">
                <span class="fh mr-3">&#8451;</span>
                <span class="cs">&#8457;</span>
              </span> --></b-col
              >
            </b-row>

            <div class="main-fcst mt-3">
              <div
                class="mx-auto mb-4"
                v-for="forecast in weather.daily"
                :key="forecast.dt"
              >
                <forecast
                  :day="forecast.dt | dayConvFull"
                  :main="forecast.weather[0].main"
                  class="fc"
                  :temp="Math.round(forecast.temp.day * 10) / 10"
                  :evening_temp="Math.round(forecast.temp.eve * 10) / 10"
                />
              </div>
            </div>

            <div class="today mt-md-4 mb-5">
              <h5 class="heading text-left font-weight-bold mt-4">
                Today's Stats
              </h5>
              <div class="t-stats mt-4">
                <div class="stat">
                  <h6>Wind Stats</h6>
                  <img src="@/assets/wind-stat.png" class="wst-img" alt="" />
                  <span class="font-weight-bold w-speed">{{
                    Math.round(weather.current.wind_speed * 10) / 10
                  }}</span
                  ><span class="unt">m/s</span>
                </div>
                <div class="stat">
                  <h6>Sunrise and Sunset</h6>
                  <img src="@/assets/sun.png" class="wst-img" alt="" />
                  <div class="text-center">
                    <span class="sunrise"
                      ><b-icon
                        icon="arrow-up-circle-fill"
                        variant="warning"
                        class="h1 sunrise m-0"
                      ></b-icon
                    ></span>

                    <span class="sunrise-t font-weight-bold">{{
                      weather.current.sunrise | wkdayConvFull
                    }}</span>
                  </div>
                  <div class="text-center mt-2">
                    <span class="sunset"
                      ><b-icon
                        icon="arrow-down-circle-fill"
                        variant="warning"
                        class="h1 sunrise m-0"
                      ></b-icon
                    ></span>

                    <span class="sunrise-t font-weight-bold">{{
                      weather.current.sunset | wkdayConvFull
                    }}</span>
                  </div>
                </div>
                <div class="stat visibility">
                  <h6>Visibility</h6>
                  <img src="@/assets/visibility.png" class="vst-img" alt="" />

                  <span class="font-weight-bold w-speed">{{
                    Math.round(weather.current.visibility * 10) / 10
                  }}</span
                  ><span class="unt">m</span>
                </div>
                <div class="stat">
                  <h6>Humidity</h6>
                  <div>
                    <img
                      src="@/assets/humidity.png"
                      class="wst-img mr-1"
                      alt=""
                    />
                  </div>

                  <span class="font-weight-bold w-speed">{{
                    weather.current.humidity
                  }}</span
                  ><span class="unt">%</span>
                </div>
                <div class="stat UV ">
                  <h6>UV Index</h6>
                  <VueSvgGauge
                    class="pb-4"
                    :start-angle="-110"
                    :end-angle="110"
                    :value="weather.current.uvi"
                    :separator-step="3"
                    :min="0"
                    :max="15"
                    :gauge-color="[
                      { offset: 0, color: '#347AB0' },
                      { offset: 100, color: '#8CDFAD' },
                    ]"
                    :scale-interval="0.1"
                  >
                    <span class="min">3</span>
                    <span class="min2">6</span>
                    <span class="max1">9</span>
                    <span class="max2">12</span>
                    <div class="inner-text">
                      <span class="uvi"
                        ><b>{{ Math.round(weather.current.uvi) }}</b></span
                      >
                    </div>
                  </VueSvgGauge>
                </div>
                <div class="stat visibility">
                  <h6 class="mb-1">Pressure</h6>
<img src="@/assets/pressure.png" class="p-img" alt="" />
                  <span class="font-weight-bold w-speed">{{
                    weather.current.pressure
                  }}</span
                  ><span class="unt">hPa</span>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue'
 */
import searchBar from "@/components/searchBar.vue";
import Footer from "@/components/footer.vue";
import weatherIcon from "@/components/weather-icon.vue";
import forecast from "@/components/forecast.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      tempUnit: false,
      compForecasts: [],
      /*       load:true
       */
    };
  },
  components: {
    searchBar,
    weatherIcon,
    forecast,
    Footer,
   
  },
  methods: {
    ...mapActions(["fetchWeather"]),
  },
  computed: { ...mapGetters({ weather: "allWeather" }) },
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
.current {
  min-height: 100vh;
}

.UV .uvi {
  font-size: 65px;
}
.highlight {
  background-color: rgb(236, 236, 236);
  right: 0;
  min-height: 100vh;

  h6 {
    font-weight: bolder;
  }
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

.visibility .w-speed {
  font-size: 30px;
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

.region {
  transition: 0.9s ease-out;
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

.fc:hover {
  transform: scale(1.1);
  transition: 0.5s ease-out;
  cursor: pointer;
}

.wst-img {
  width: 40px;
}

.vst-img {
  width: 80px;
  height: 60px;
}

.p-img{
  width:60px;
}

.sunrise {
  height: 25px;
}

.sunrise-t {
  height: 25px;
}

.min {
  position: relative;
  top: 70px;
  right: 20px;
}

.min2 {
  position: relative;
  right: 10px;
  top: 50px;
}
.max1 {
  position: relative;
  left: 15px;
  top: 50px;
}

.max2 {
  position: relative;
  top: 70px;
  left: 20px;
}

.inner-text {
  // allow the text to take all the available space in the svg on top of the gauge
  width: 50px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  span {
    max-width: 100px;
    font-size: 70px;

    // ...
  }
}
@media (min-width: 768px) {
  .home {
    .footer {
      display: none;
    }
  }
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
