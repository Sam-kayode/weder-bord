<template>
  <div class="fcsts-view"><Forecasts /> <Footer></Footer></div>
</template>
<script>
import Forecasts from "@/components/forecasts.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Forecast",
  components: {
    Forecasts,
    Footer,
  },
};
</script>
<style lang="scss">
.fcsts-view {
  background-color: rgb(236, 236, 236);
  min-height: 100vh;
}

.dark {
  .fcsts-view {
    background-color: rgb(10, 29, 44);
  }
}
</style>