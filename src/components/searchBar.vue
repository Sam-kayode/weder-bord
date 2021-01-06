<template>
  <div>
    <form class="search-bar" action="">
      <input type="search" placeholder="Search for places..." />
      <!--   <i class="fa fa-search"></i>
 -->
      <b-icon icon="search" class="fa fa-search"></b-icon>
    </form>
  </div>
</template>

<script>
export default {
  name: "searchBar",
  props: {
    msg: String,
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

.dark {
  .search-bar {
    border: 4px solid rgba(255, 255, 255, 0.427);
              transition: 0.35s ease-out;
    ;
    input {
      background-color: rgba(255, 255, 255, 0.8);
              transition: 0.35s ease-out;
      ;
    }
  }
}
/* dark mode styling */


/*  */
</style>
