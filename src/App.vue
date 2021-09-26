<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
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
</style>
