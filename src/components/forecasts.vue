<template>
  <div class="fcsts-cont">
    <h3 class="mt-4 font-weight-bold">Weather Forecast</h3>
    <h4 class="font-weight-bold">Lagos, Nigeria</h4>
    <div class="fcsts pr-5">
      <div
        class="mb-4 mx-3 pl-2"
        @click="activate(1)"
        :class="{ active: active_el == 1 }"
      >
        <forecast class="fc" />
      </div>
      <div
        class="mb-4 mx-3"
        @click="activate(2)"
        :class="{ active: active_el == 2 }"
      >
        <forecast class="fc" />
      </div>
      <div
        class="mb-4 mx-3"
        @click="activate(3)"
        :class="{ active: active_el == 3 }"
      >
        <forecast class="fc" />
      </div>
      <div
        class="mb-4 mx-3"
        @click="activate(4)"
        :class="{ active: active_el == 4 }"
      >
        <forecast class="fc" />
      </div>
      <div
        class="mb-4 mx-3"
        @click="activate(5)"
        :class="{ active: active_el == 5 }"
      >
        <forecast class="fc" />
      </div>
      <div
        class="mb-4 mx-3 pr-3"
        @click="activate(6)"
        :class="{ active: active_el == 6 }"
      >
        <forecast class="fc" />
      </div>
    </div>

    <div class="f-stats mt-3 p-3">
      <div class="f-stat">
        <h5>Wind Stats</h5><img src="@/assets/wind-stat.png" class="wst-img" alt="">
        <span class="font-weight-bold w-speed">7.7</span
        ><span class="unt">km/h</span>
        <div class="mt-1">WSW</div>
      </div>
      <div class="f-stat">
        <h5>Sunrise and Sunset</h5>
        <div class="text-center">
          <span class="sunrise"
            ><b-icon
              icon="arrow-up-circle-fill"
              variant="warning"
              class="h1 sunrise m-0"
            ></b-icon
          ></span>

          <span class="sunrise-t font-weight-bold">6.48pm</span>
        </div>
        <div class="text-center mt-2">
          <span class="sunset"
            ><b-icon
              icon="arrow-down-circle-fill"
              variant="warning"
              class="h1 sunrise m-0"
            ></b-icon
          ></span>

          <span class="sunrise-t font-weight-bold">6.48pm</span>
        </div>
      </div>
      <div class="f-stat">
        <h5>Visibility</h5>

        <span class="font-weight-bold w-speed">7.7</span
        ><span class="unt">km</span>
      </div>
      <div class="f-stat">
        <h5>Humidity</h5><img src="@/assets/humidity.png" class="wst-img mr-1" alt="">

        <span class="font-weight-bold w-speed">7.7</span
        ><span class="unt">%</span>
        
      </div>
      <div class="f-stat">
        <h5>UV Index</h5>

        <VueSvgGauge
          :start-angle="-110"
          :end-angle="110"
          :value="UvIndex"
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
            <span> <b>7</b></span>
          </div>
        </VueSvgGauge>
      </div>
      <div class="f-stat">
        <h5>Wind Stats</h5>
        <span class="font-weight-bold w-speed">7.7</span
        ><span class="unt">km/h</span>
        <div class="mt-1">WSW</div>
      </div>
    </div>
  </div>
</template>

<script>
import forecast from "@/components/forecast.vue";

export default {
  data() {
    return {
      active_el: 0,
      UvIndex: 7,
    };
  },
  components: {
    forecast,
  },
  methods: {
    activate(el) {
      this.active_el = el;
    },
  },
};
</script>
<style lang="scss">
.fcsts-cont {
  padding-top: 55px;
  background-color: rgba(207, 207, 207, 0.486);
  z-index: 2;
}
.fcsts {
  display: flex;
  background-color: rgba(207, 207, 207, 0.486);
  position: relative;
  overflow-x: scroll;
  
  scroll-behavior: smooth;
  z-index: 2;
  padding: 30px 0px 10px 0px;
  margin:auto;
}

.f-stats {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 5px;
  transition: 0.5s ease-out;
}

.wst-img{
  width:40px
}
.f-stat {
  background-color: white;
  width: 150px;
  padding: 15px 10px;
  margin: 20px auto;
  border-radius: 20px;
  transition: 0.5s ease-out;
  font-size: 17px;

  h5 {
    font-size: 15px;
  }

  .sunrise {
    height: 25px;
  }
  .sunrise-t {
    height: 25px;
  }
  svg {
    height: 90px;
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
}

.active {
  transform: scale(1.29);
  transition: 0.5s ease-out;
  border-radius: 16px;
  .fc {
    background-color: rgba(0, 0, 0, 0.192);
  }
}
.dark {
  .fcsts {
    background-color: rgba(38, 53, 73, 0.911);
  }
  .fcsts-cont {
    background-color: rgba(10, 24, 41, 0.938);
  }
  .active {
    .fc {
      background-color: rgba(3, 9, 20, 0.575);
    }
  }
  .f-stat {
    background-color: rgba(38, 53, 73, 0.747);
  }
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
</style>