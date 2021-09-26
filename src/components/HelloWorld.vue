<template>
  <div class="container">
    <h5 class="white-text">HELLO WORLD 🌏,</h5>
    <h3>I’m <span class="heading">Spite</span></h3>
    <h1 class="white-text">{{ job }}</h1>
    <p class="second-text">I’m a Full-Stack Front-End Developer based in Bangkok, Thailand.</p>
    <br />
    <div class="download-btn">
      <div class="btn"><a href="/resume-thanawat.pdf" download>Download CV</a></div>
    </div>
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

  .download-btn {
    cursor: pointer;
    width: 30%;
    background: linear-gradient(to right, #ffce00 0%, #00ffce 75%, #ce00ff 100%);
    background-size: 500%;
    border: none;
    border-radius: 2rem;
    padding: 0.2rem;
    text-align: center;

    animation-name: gradientOut;
    animation-duration: 0.5s;

    &:hover {
      animation-name: gradient;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
    &:focus {
      outline: none;
    }

    .btn {
      border-radius: 2rem;
      width: 100%;
      height: 100%;
      background-color: #000;
      padding: 0.5rem 0;

      a {
        color: #ffce00;
        text-decoration: none;
      }
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100%;
    }
  }
  @keyframes gradientOut {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
