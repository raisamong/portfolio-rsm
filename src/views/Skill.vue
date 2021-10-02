<template>
  <div class="containter">
    <h5 class="white-text">MY PROFESSIONS</h5>
    <h1>What I Love to DO, 💛</h1>
    <div class="skill-container">
      <div></div>
      <div></div>
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
}

.skill-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > div:first-child {
    background-color: green;
  }
  > div {
    margin-right: 2rem;
    margin-bottom: 1rem;
    flex: 1;
    height: 20vw;
    min-height: 300px;

    width: 20vw;
    min-width: 200px;
    max-width: 700px;
    background-color: red;
  }
}
</style>
