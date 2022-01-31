<template>
 <section class="col-sm-12 col-md-10 col-lg-10">
    <div class="row justify-content-center h-100">
    <div v-if="isLoggedIn" id="logout">
      <Dashboard />
    </div>
    <span v-else class="content col-10 col-sm-12 col-md-7 col-lg-3 p-5 align-self-center text">
      <p class="txt-big"><a href="/register">Register</a></p>
      <p> or </p>
      <p class="txt-big"><a href="/login">Log In</a></p>
    </span>
    </div>
  </section>
</template>


<script>
import Dashboard from '@/views/Dashboard.vue'
export default {
  name: 'Home',
  computed : {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    }
  },
  components: {
    Dashboard
  }
}
</script>

<style>

.txt-big { font-size: 20pt; }
.text p a { color: black; }
.text p a:hover { color: #8666abff; }

</style>