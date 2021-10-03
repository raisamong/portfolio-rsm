<template>
  <div class="containter">
    <h5 class="white-text">MY LOVELY PROJECTS 💛</h5>
    <h1>What I’ve Worked On</h1>
    <div class="project-container">
      <div class="white-grad" v-for="project in projects" v-bind:key="project.name">
        <div class="white-text stack">{{ project.stack.join(' / ') }}</div>
        <div class="name">
          <h1 v-for="word in project.name.split(' ')" v-bind:key="word">
            {{ word }}
          </h1>
        </div>
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
    name: 'Typing Oxford',
    github: 'https://github.com/raisamong/typing-oxford-3000-rsm',
    stack: ['TS', 'React']
  },
  {
    name: 'Port (this site)',
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
