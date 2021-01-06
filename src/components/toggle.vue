<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input
        type="checkbox"
        :checked="mode === 'dark' ? 'checked' : false"
        @change="$emit('toggle')"
      />
      <span class="toggler round"> </span>
    </label>
  </div>
</template>
<script>
export default {
  props: ["mode"],
};
</script>
<style>
.toggle {
  position:fixed;
  display: inline-block;
  top:15px;
  z-index:2000000000;
  right:90px;
  width: 48px;
  height:26px;
}

.toggle input {
  display: none;

}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
border: 0.5px solid rgb(200, 200, 200);
}

.toggler:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 2px;
  bottom: 1px;
  background: orange;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .toggler {
  background: #c2c2c2;
}

input:focus + .toggler {
  box-shadow: 0 0 2px #c2c2c2;
}

input:checked + .toggler:before {
  -webkit-transform: translateX(12px);
  -ms-transform: translateX(12px);
  transform: translateX(12px);
  box-shadow: 10px 0px#192229;
  background: #c2c2c2;
}
.toggler.round {
  border-radius: 25px;
}
.toggler.round:before {
  border-radius: 50%;
}
</style>