<template>
  <div class="container flex-center">
    <div class="typewriter">
      <h1>{{ name }}</h1>
      <h2 class="second-text job">{{ `${job}` }}</h2>
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
  flex-direction: row;
  height: 100%;
}

.container-image {
  flex-shrink: 1;
}

.typewriter {
  flex: 1;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  /* animation: typing 3s steps(40, end); */
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

#profile-image {
  width: 400px;
  height: 500px;
  border-radius: 5%;
}
</style>
