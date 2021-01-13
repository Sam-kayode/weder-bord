<template>
  <div class="footer">
    <img src="../assets/logo.png" class="footer-logo" alt="" />
    <h3>Wederbord</h3>
    <p class="mt-3">Quick Links</p>
    <b-container>
      <b-row class="pb-3">
        <b-col>Home</b-col>
        <b-col>Forecast</b-col>
        <b-col>About</b-col>
      </b-row>
    </b-container>
    <div class="copyright">
      &#169; 2021 <span class="font-weight-bold">sam-kay</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss">
.footer {
  background-color: rgba(7, 7, 7, 0.219);
  padding: 0;
  margin: 0;
}

.footer h3 {
  margin: 0;
  font-size: 20px;
  font-weight: bolder;
}
.footer-logo {
  width: 60px;
  margin-top: 30px;
}

.copyright {
  background-color: rgba(0, 0, 0, 0.226);
}

.dark {
  .footer {
    background-color: rgba(0, 0, 0, 0.363);
  }
  .copyright {
    background: #162736;
  }
}


</style>