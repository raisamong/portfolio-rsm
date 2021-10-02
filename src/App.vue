<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="app-container flex-center">
    <div>
      <router-view />
    </div>
    <div class="profile-image box-shadow">
      <div class="image"></div>
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  color: #fff;
}

* {
  margin-top: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffce00; //#00FFCE #CE00FF
  height: 100%;
  margin: auto;
  .second-text {
    color: #356493;
  }
  .white-text {
    color: #fff;
  }
}

.app-container {
  height: 100%;
  flex-direction: row;
  > div:first-child {
    flex-grow: 1;
    z-index: 1;
  }
}

.flex-center {
  display: flex;
  justify-content: center;
  align-content: center;
}

.box-shadow {
  box-shadow: 0px 0px 20px 0px rgba(66, 185, 131, 0.3);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(66, 185, 131, 0.3);
  -moz-box-shadow: 0px 1px 20px 0px rgba(66, 185, 131, 0.3);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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

  //adjust opacity
  opacity: 1;
  @media only screen and (max-width: 1440px) {
    opacity: 0.8;
  }
  @media only screen and (max-width: 1024px) {
    opacity: 0.6;
  }
  @media only screen and (max-width: 515px) {
    opacity: 0.4;
  }
}

//animations

.gradient-bg {
  padding: 0.2rem;
  background: linear-gradient(to right, #ffce00 0%, #00ffce 75%, #ce00ff 100%);
  background-size: 500%;
  animation-name: gradientOut;
  animation-duration: 0.5s;
  &:hover {
    animation-name: gradient;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  &:focus {
    outline: none;
  }

  .block {
    width: 100%;
    height: 100%;
    background-color: #000;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100%;
  }
}
@keyframes gradientOut {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
