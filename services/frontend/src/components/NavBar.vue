<template>
  <aside id="sidebar" class="col-lg-2 col-sm-12 col-md-12 p-0">
    <nav id="nav" class="d-flex flex-column navbar-expand-lg">

        <span class="p-3 cont-nombre-app">
            <a class="navbar-brand" href="/">FastAPI + Vue</a>  
        </span>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="d-flex collapse navbar-collapse align-items-start w-100" id="navbarNav">
          <ul v-if="isLoggedIn" class="h-100 mt-4">
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/new">Agregar resultado</router-link>
            </li> 
            <li class="nav-item">
              <router-link class="nav-link" to="/profile">Mi Perfil</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="logout">Log Out</a>
            </li>
          </ul>
          
          <ul v-else class="h-100 mt-4">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Registro</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Log In</router-link>
            </li>
          </ul> 
        </div> 
    </nav> 
  </aside>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logOut');
      this.$router.push('/login');
    },
  },
}
</script>


<style>
  
#nav {

  font-weight: bold;
  text-align: left;
  background-color: whitesmoke;
  -webkit-box-shadow: 8px 0px 15px 1px rgba(0,0,0,0.10); 
  box-shadow: 8px 0px 15px 1px rgba(0,0,0,0.10);  
  position: sticky;
  height: 100vh;
  top:0;
}

@media (max-width: 1000px) {
  #nav {
    height: fit-content;
  }
}

.nav-item { 
  width: 100%;
  margin: 1em 0.5em 1em 0.5em;
}

#nav a.router-link-exact-active {

  background-color: #8666abff;
  color: whitesmoke;
  padding: 1em;
  border-radius: 10px;
}

.nav-link { color: black; }
.nav-link:hover { color: #8666abff;}
.nav-content { padding: 2em; }

.cont-nombre-app {
  
  text-align: center;
  background-color: #8666abff;
  height: fit-content;
}

.cont-nombre-app a { color: whitesmoke; }
</style>
