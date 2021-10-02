<template>
  <HelloWorld name="Thanwat Thangpiboonvech" job="Development Specialist" />
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

<style scoped lang="scss"></style>
