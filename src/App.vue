<template>
  <div id="app">
    <router-view/>
    <div id="footer">
      <p><small>Guillaume Haerinck - 2020</small></p>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --left-decals: 20px;
}

body {
  background-color: #f4f4f4;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.2em;
  margin: 0;
  padding: 0; 
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

#footer {
  background-color: white;

  p {
    text-align: center;
    margin: 0;
    padding: 0;
  }
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

.spacing {
  margin: 15px 0;
}

</style>
