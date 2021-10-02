<template>
  <h5 class="white-text">HELLO WORLD 🌏,</h5>
  <h3>I’m <span class="heading">Spite</span></h3>
  <h1 class="white-text">{{ job }}</h1>
  <p class="second-text">I’m a Full-Stack Front-End Developer based in Bangkok, Thailand.</p>
  <br />
  <div class="download-btn gradient-bg">
    <div class="block btn"><a href="/resume-thanawat.pdf" download>Download CV</a></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    name: String,
    job: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.heading {
  margin-left: 1rem;
  font-size: 5rem;
}

.download-btn {
  cursor: pointer;
  width: 30%;
  border: none;
  border-radius: 2rem;
  text-align: center;

  .btn {
    padding: 0.5rem 0;
    border-radius: 2rem;
    a {
      color: #ffce00;
      text-decoration: none;
    }
  }
}
</style>
