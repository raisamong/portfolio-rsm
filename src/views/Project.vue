<template>
  <div class="containter">
    <h5 class="white-text">MY LOVELY PROJECTS 💛</h5>
    <h1>What I’ve Worked On</h1>
    <div class="project-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
.containter {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-60%);
  font-weight: bold;
  text-align: start;
  @media only screen and (max-width: 515px) {
    top: 60%;
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
  /* grid-auto-rows: 350px; */
  gap: 1rem 1rem;

  justify-content: space-evenly;
  justify-items: stretch;

  > div {
    background-color: rgba(1, 1, 1, 0.3);
    /* margin: 0.25rem 0.5rem; */

    /* width: calc(calc(100% - 3rem) / 3); */
    /* min-width: 250px; */
    /* max-width: calc(calc(100% - 3rem) / 3); */

    /* min-height: 350px; */
  }
}
</style>
