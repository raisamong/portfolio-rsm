<template>
  <div class="home flex-center">
    <div class="detail">
      <HelloWorld name="Thanwat Thangpiboonvech" job="Development Specialist" />
    </div>
    <div class="profile-image box-shadow">
      <div class="image"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
})
</script>

<style scoped lang="scss">
.home {
  height: 100%;
  flex-direction: row;
}

.profile-image {
  background-image: url('/img/fear.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0));
  /* mask-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.35, rgba(0, 0, 0, 1)),
    color-stop(0.5, rgba(0, 0, 0, 0)),
    color-stop(0.65, rgba(0, 0, 0, 0)),
    color-stop(1, rgba(0, 0, 0, 0))
  ); */

  mask-size: 100%;
  height: 100%;
  flex-shrink: 1;
  width: 600px;
}

.detail {
  flex-grow: 1;
}
</style>
