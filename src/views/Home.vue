<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <Heart /> -->
    <Hello msg="Welcome to Your XIXI" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
// import Heart from '@/components/Heart.vue'

export default {
  name: 'Home',
  components: {
    Hello,
    // Heart,
  },
}
</script>
