<template>
  <div class="fcsts-view">
    <Forecasts />
  </div>
</template>
<script>
import Forecasts from "@/components/forecasts.vue";

export default {
  name: "Forecast",
  components: {
    Forecasts,
  },
};
</script>
<style lang="scss">
.fcsts-view{
    background-color: rgb(236, 236, 236);
    min-height:100vh;

}

.dark {
  .fcsts-view {
    background-color: rgb(10, 29, 44);
  }
}
</style>