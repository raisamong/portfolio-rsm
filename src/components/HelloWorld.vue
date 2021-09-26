<template>
  <div class="container">
    <h5 class="white-text">HELLO WORLD 🌏,</h5>
    <h3>I’m <span class="heading">Spite</span></h3>
    <h1 class="white-text">{{ job }}</h1>
    <p class="second-text">I’m a Full-Stack Front-End Developer based in Bangkok, Thailand.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    name: String,
    job: String,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-70%);
  font-weight: bold;
  text-align: start;

  .heading {
    margin-left: 1rem;
    font-size: 5rem;
  }
}
</style>
