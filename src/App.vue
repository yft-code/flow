<template>
  <div id="app">
    第4次
    <router-view/>
    <div>
       12点09
    </div>
     <div>
       12点10
    </div>
    <div>
       12点11
    </div>
     <div>
       12点11sss
    </div>
     <div>
       哈哈哈哈
    </div>
  </div>
</template>

<style lang="scss">
#app {
  min-width: 1680px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
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
