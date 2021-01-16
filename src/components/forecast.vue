<template>
  <div class="forecast text-center px-3 py-1">
    <h6 class="font-weight-bold pt-2 pb-0 m-0">{{ day }}</h6>
    <div class="showbox">
      <div class="day"  v-if="(weather.current.dt>=weather.current.sunrise) && (weather.current.dt<=weather.current.sunset) ">
        <div class="div-icons">
          <Clear v-if="main == 'Clear'" />
          <Clear v-if="main == 'Mist'" />
          <Clear v-if="main == 'smoke'" />
          <Clear v-if="main == 'Haze'" />
          <Clear v-if="main == 'Dust'" />
          <Clear v-if="main == 'Ash'" />
          <Clouds v-if="main == 'Clouds'" />
          <Snow v-if="main == 'Snow'" />
          <Rain v-if="main == 'Rain'" />
        </div>
          <div class="font-weight-bold text-center">
      <p class="p-0 mb-1">{{main}}</p>

      <span class="">{{temp}}</span>
      <span class=""><sup>&#8451;</sup></span>
      <span class="" v-if="tempUnit"><sup>&#8457;</sup></span>
    </div>
      </div>

      <div class="night" v-else>
        <!-- cloudy -->
       <Clouds v-if="main == 'Clouds'" />
        <Clouds v-if="main == 'Clear'" />
        <Snow v-if="main == 'Snow'" />
        <Rain v-if="main == 'Rain'" />
          <div class="font-weight-bold text-center">
      <p class="p-0 mb-1">{{main}}</p>

      <span class="">{{evening_temp}}</span>
      <span class=""><sup>&#8451;</sup></span>
      <span class="" v-if="tempUnit"><sup>&#8457;</sup></span>
    </div>
      </div>
    </div>
  
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import Clear from "@/components/weather-icons/clear.vue";
import Clouds from "@/components/weather-icons/clouds.vue";
import Rain from "@/components/weather-icons/rain.vue";
import Snow from "@/components/weather-icons/snow.vue";
export default {
  name: "forecast",
  data() {
    return {
      tempUnit: false,
    };
  },
  components: {
    Clear,
    Clouds,
    Snow,
    Rain,
  },
  computed: mapGetters({ weather: "allWeather" }),
  props: ["day","main", "temp", "evening_temp"],
};
</script>
<style lang="scss" scoped>
.forecast {
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  transition: 0.35s ease-out;
  width:140px;
}
$color-sun: #edc951;
$color-cloud: #00a0b0;
$color-cloud-light: #00cee3;
$color-cloud-dark: #008997;
$color-rain-cloud: #666;
$color-rain-cloud-light: #999;
$color-rain-cloud-dark: #555;
$color-snow-cloud: #ccc;
$color-main-background: #222;
$color-rainbow-red: #bd1e52;
$color-rainbow-red: #bd1e52;
$color-rainbow-orange: #e88024;
$color-rainbow-yellow: #f8cb10;
$color-rainbow-green: #899c3b;

a {
  text-decoration: none;
  color: $color-cloud;
}

.div-icons {
  display: block;
  text-align: center;
}

.icon {
  margin: 10px 10px 10px 10px;
  max-width: 450px;
  height: 90px;
}

.sunny-body path {
  fill: $color-sun;
}

.sunny-long-ray {
  transform-origin: 50% 50%;
  animation: spin 9s linear infinite;
}

.sunny-long-ray path {
  fill: $color-sun;
}

.sunny-short-ray {
  transform-origin: 50% 50%;
  animation: spin 9s linear infinite;
}

.sunny-short-ray path {
  fill: $color-sun;
}

.cloud-offset path {
  fill: $color-main-background;
}

.main-cloud path {
  fill: $color-cloud;
}

.small-cloud path {
  fill: $color-cloud;
  animation: flyby 6s linear infinite;
}

.rain-cloud path {
  fill: $color-cloud;
  animation: rain-cloud-color 6s ease infinite;
}

.rain-drops path {
  fill: $color-cloud;
  opacity: 0;
}

.rain-drops path:nth-child(1) {
  animation: rain-drop 1.2s linear infinite;
}

.rain-drops path:nth-child(2) {
  animation: rain-drop 1.2s linear infinite 0.4s;
}

.rain-drops path:nth-child(3) {
  animation: rain-drop 1.2s linear infinite 0.8s;
}

.snow-cloud path {
  fill: $color-snow-cloud;
}

.snowflakes path {
  transform-origin: 50% 50%;
  fill: $color-snow-cloud;
  opacity: 0;
}

.snowflakes path:nth-child(1) {
  animation: snow-drop 1.2s linear infinite;
}

.snowflakes path:nth-child(2) {
  animation: snow-drop 1.2s linear infinite 0.4s;
}

.snowflakes path:nth-child(3) {
  animation: snow-drop 1.2s linear infinite 0.8s;
}

.wind-string path {
  stroke: $color-snow-cloud;
  stroke-linecap: round;
  stroke-width: 7px;
  animation: wind-blow 3s linear infinite;
}

.rainbows path {
  stroke-linecap: round;
  animation: rainbow 4.5s linear infinite;
}

.rainbows path:nth-child(1) {
  stroke: $color-rainbow-red;
  stroke-width: 6px;
}

.rainbows path:nth-child(2) {
  stroke: $color-rainbow-orange;
  stroke-width: 8px;
}

.rainbows path:nth-child(3) {
  stroke: $color-rainbow-yellow;
  stroke-width: 6px;
}

.rainbows path:nth-child(4) {
  stroke: $color-rainbow-green;
  stroke-width: 14px;
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes flyby {
  0% {
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    opacity: 0;
  }
  30% {
    -webkit-transform: translate(39px, 0px);
    transform: translate(39px, 0px);
    opacity: 1;
  }
  70% {
    -webkit-transform: translate(91px, 0px);
    transform: translate(91px, 0px);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(130px, 0px);
    transform: translate(130px, 0px);
    opacity: 0;
  }
}

@keyframes rain-cloud-color {
  100%,
  0% {
    fill: $color-rain-cloud;
  }
  20% {
    fill: $color-rain-cloud-dark;
  }
  21.5% {
    fill: $color-rain-cloud-light;
  }
  25% {
    fill: $color-rain-cloud-dark;
  }
  27.5% {
    fill: $color-rain-cloud-light;
  }
  30% {
    fill: $color-rain-cloud-dark;
  }
  40% {
    fill: $color-rain-cloud-light;
  }
  90% {
    fill: $color-rain-cloud-dark;
  }
}

@keyframes rain-drop {
  0% {
    -webkit-transform: translate(0px, -60px);
    transform: translate(0px, -60px);
    opacity: 0;
  }
  30% {
    -webkit-transform: translate(0px, -36px);
    transform: translate(0px, -36px);
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0px, 4px);
    transform: translate(0px, 4px);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0px, 20px);
    transform: translate(0px, 20px);
    opacity: 0;
  }
}

@keyframes snow-drop {
  0% {
    -webkit-transform: translate(0px, -60px) rotate(0deg);
    // transform: translate(0px, -60px) rotate(0deg);
    opacity: 0;
  }
  30% {
    -webkit-transform: translate(0px, -36px) rotate(108deg);
    // transform: translate(0px, -36px) rotate(108deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0px, 4px) rotate(288deg);
    // transform: translate(0px, 4px) rotate(288deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0px, 20px) rotate(360deg);
    // transform: translate(0px, 20px) rotate(360deg);
    opacity: 0;
  }
}

@keyframes wind-blow {
  0% {
    stroke-dasharray: 5 300;
    stroke-dashoffset: -200;
    opacity: 1;
  }
  50% {
    stroke-dasharray: 300 300;
    stroke-dashoffset: -100;
    opacity: 1;
  }
  90% {
    stroke-dasharray: 50 300;
    stroke-dashoffset: -20;
    opacity: 0.7;
  }
  100% {
    stroke-dasharray: 20 300;
    stroke-dashoffset: 0;
    opacity: 0.2;
  }
}

@keyframes rainbow {
  0% {
    stroke-dasharray: 10 210;
    stroke-dashoffset: 0;
    opacity: 0;
  }
  30% {
    stroke-dasharray: 210 210;
    stroke-dashoffset: 0;
    opacity: 1;
  }
  70% {
    stroke-dasharray: 210 210;
    stroke-dashoffset: 0;
    opacity: 1;
  }
  100% {
    stroke-dasharray: 0 210;
    stroke-dashoffset: -210;
    opacity: 0;
  }
}

/* media queries */

@media (max-width: 576px) {
  .forecast {
    transition: 0.35s ease-out;
  
    svg {
      width: 100%;
      height: 50px;
      padding: 0;
      margin: auto;
    }
  }
}

/* dark mode styling */
.dark {
  .forecast {
    background-color: #162736;
    transition: 0.35s ease-out;
  }
}
/*  */
</style>
