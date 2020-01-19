<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
:root {
  --left-decals: 20px;
}

body {
  background-color: #f4f4f4;
  font-family: 'IBM Plex Sans', sans-serif;
  padding: 0 50px;
  font-size: 1.4em;
}

p {
  font-size: 1.2em;
  line-height: 160%;
}

.backgrounded {
  background-color: white;
  padding: var(--left-decals);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.left {
  justify-self: left;
}

.right {
  justify-self: right;
}

.center {
  justify-self: center;
}

</style>
