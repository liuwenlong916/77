<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="$router.push({ name: 'TimeLine' })">点击进入</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>
