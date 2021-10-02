<template>
  <div class="container">
    <HelloWorld name="Thanwat Thangpiboonvech" job="Development Specialist" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-70%);
  font-weight: bold;
  text-align: start;
}
</style>
