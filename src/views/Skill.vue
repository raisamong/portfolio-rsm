<template>
  <div class="containter">
    <h5 class="white-text">MY PROFESSIONS</h5>
    <h1>What I Love to DO, 💛</h1>
    <div class="skill-container">
      <div class="gradient-bg">
        <div class="block">
          <h3 class="white-text padding-sm no-margin space-letter">LANGUAGE</h3>
          <ul class="skill-list">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Kotlin</li>
            <li>CSS3, SCSS</li>
            <li>HTML5</li>
          </ul>
        </div>
      </div>
      <div class="gradient-bg">
        <div class="block">
          <h3 class="white-text padding-sm no-margin space-letter">FRAMEWORK</h3>
          <ul class="skill-list">
            <li>React</li>
            <li>React Native</li>
            <li>React Testing Library</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Spring Boot</li>
            <li>Vue</li>
          </ul>
        </div>
      </div>
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

  > div {
    margin-right: 2rem;
    margin-bottom: 1rem;

    flex: 1;
    height: 20vw;
    min-height: 300px;

    width: 20vw;
    min-width: 200px;
    max-width: 700px;

    border-radius: 1rem;
    > div {
      border-radius: 1rem;
    }
  }
}

.skill-list {
  margin: 0.25rem 2rem;
  > li {
    color: #fff;
    margin: 0.25rem;
  }
}
</style>
