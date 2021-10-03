<template>
  <div class="containter">
    <h5 class="white-text">MY LOVELY PROJECTS 💛</h5>
    <h1>What I’ve Worked On</h1>
    <div class="project-container">
      <div v-for="project in projects" v-bind:key="project.name">
        <div class="white-text stack">{{ project.stack.join('/') }}</div>
        <div class="name">{{ project.name }}</div>
        <div class="additional">Github</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Project {
  name: string
  github: string
  stack: string[]
}

const projects: Project[] = [
  {
    name: 'Happy Birthday',
    github: 'https://github.com/raisamong/happy-birthday-rsm',
    stack: ['JS', 'Matter.js']
  },
  {
    name: 'Happy Birthday',
    github: 'https://github.com/raisamong/happy-birthday-rsm',
    stack: ['JS', 'Matter.js']
  },
  {
    name: 'Happy Birthday',
    github: 'https://github.com/raisamong/happy-birthday-rsm',
    stack: ['JS', 'Matter.js']
  }
]

export default defineComponent({
  name: 'Project',
  data() {
    return {
      projects: projects
    }
  }
})
</script>

<style scoped lang="scss">
.containter {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-60%);
  font-weight: bold;
  text-align: start;

  @media only screen and (max-width: 978px) {
    top: 65%;
  }
  @media only screen and (max-width: 645px) {
    top: 80%;
  }
  width: 80%;
}

.project-container {
  background-color: red;

  height: 100%;
  width: 100%;
  max-width: 1000px;
  min-width: 300px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(350px, 3fr));
  grid-auto-rows: 350px;
  gap: 1rem 1rem;

  justify-content: space-evenly;
  justify-items: stretch;

  > div {
    padding: 1rem;
    background-color: rgba(1, 1, 1, 0.3);

    display: grid;
    grid-template-rows: 50px auto 50px;

    > div {
      padding: 0.5rem;
    }

    .stack {
      background-color: #ffce00; //#00FFCE #CE00FF
    }
    .name {
      background-color: #00ffce;
    }
    .additional {
      background-color: #ce00ff;
    }
    /* margin: 0.25rem 0.5rem; */

    /* width: calc(calc(100% - 3rem) / 3); */
    /* min-width: 250px; */
    /* max-width: calc(calc(100% - 3rem) / 3); */

    /* min-height: 350px; */
  }
}
</style>
