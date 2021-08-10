<template>
  <div class="main">
    <div class="l"></div>
    <div class="r"></div>
    <div class="z"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main {
  width: 500px;
  height: 500px;
  margin: 20px auto;
  position: relative;
}
.l {
  width: 300px;
  height: 300px;
  background: red;
  border-radius: 50%;
  position: absolute;
  left: 0px;
  top: 0px;
}
.r {
  width: 300px;
  height: 300px;
  background: red;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  top: 0px;
}
.z {
  width: 300px;
  height: 300px;
  background: red;
  transform: translate(100px, 100px) rotate(45deg);
}
</style>
