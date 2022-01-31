<template>
  <div id="app" >
    <div id="main container" class="container-fluid">
      <div id="cont-main" class="row">
        <NavBar />
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {

  padding: 0;
  margin: 0;
}

#cont-main { background-color: whitesmoke; }

a, a:hover {

  text-decoration: none;
  color: black;
  cursor: pointer;
}

a:hover { color: #8666abff }

ul { list-style: none; }

.content {

  border-radius: 10px;
  background: #f5f5f5;
  box-shadow:  16px 16px 21px #bababa,
              -16px -16px 21px #ffffff;
}

.btn-viewmore {

  border: none;
  background-color: #8666abff;
  border-radius: 12px;
  width: 100%;
  padding: 0.5em 1em 0.5em 1em;
  font-weight: bold;
  color: whitesmoke;
}

.btn-viewmore:hover { background-color: #6a42ffff; }
</style>
