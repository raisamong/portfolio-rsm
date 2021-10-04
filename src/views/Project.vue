<template>
  <div class="containter">
    <h5 class="white-text">MY LOVELY PROJECTS 💛</h5>
    <h1>What I’ve Worked On</h1>

    <div class="project-container">
      <div class="white-grad" v-for="(project, index) in projects" v-bind:key="project.name">
        <div class="stack clickable-not space">
          <font-awesome-icon
            v-on:click="goToGithub(project.github)"
            class="icon clickable"
            :icon="['fab', 'github']"
          />

          <font-awesome-icon
            v-if="project.externalLink"
            v-on:click="goToGithub(project.github)"
            class="icon clickable"
            :icon="['fas', 'external-link-alt']"
          />
        </div>
        <div class="name clickable-not">
          <h1 class="text-gradient white-space-pre" v-bind:class="{ '-revert': index % 2 !== 0 }">
            {{ project.name }}
          </h1>
        </div>
        <div class="additional white-text ">
          {{ project.stack.join(' / ') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Project {
  name: string
  github: string
  externalLink?: string
  stack: string[]
}

const projects: Project[] = [
  {
    name: 'Happy\nBirthday',
    github: 'https://github.com/raisamong/happy-birthday-rsm',
    externalLink: 'https://happy-birthday-rsm.vercel.app/',
    stack: ['JS', 'Matter.js']
  },
  {
    name: 'Typing\nOxford',
    github: 'https://github.com/raisamong/typing-oxford-3000-rsm',
    externalLink: 'https://typing-oxford-3000-rsm.vercel.app/',
    stack: ['TS', 'React']
  },
  {
    name: 'Portfolio',
    github: 'https://github.com/raisamong/portfolio-rsm',
    stack: ['TS', 'Vue']
  }
]

export default defineComponent({
  name: 'Project',
  data() {
    return {
      projects: projects
    }
  },
  methods: {
    goToGithub: function(url: string) {
      window.open(url)
    }
  }
})
</script>

<style scoped lang="scss">
$gradient-color: linear-gradient(to right, #ffce00 0%, #00ffce 75%, #ce00ff 100%);

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

    display: grid;
    grid-template-rows: 75px auto 35px;

    > div {
      padding: 0.5rem;
    }

    .stack {
      text-align: end;
      /* background-color: red; */
    }
    .name {
      text-align: start;
      padding: 2rem;
      h1 {
        margin: 0;
        align-self: center;
      }
      /* background-color: green; */
    }
    .additional {
      /* background-color: blue; */
    }
  }

  .white-grad:nth-of-type(even) {
    --c: linear-gradient(to left, #ffce00 0%, #00ffce 75%, #ce00ff 100%); /* border width*/
  }

  .white-grad {
    position: relative;
    --b: 0 8px 0 8px;
    --r: 50% 0;
    --c: linear-gradient(to right, #ffce00 0%, #00ffce 75%, #ce00ff 100%); /* border width*/
  }

  .white-grad:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--c, #000);
    padding: var(--b);
    border-radius: var(--r, 50%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }
  //ref https://stackoverflow.com/questions/51496204/border-gradient-with-border-radius/51496341
}
</style>
