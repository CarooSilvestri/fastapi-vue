<template>
  <section class="col-sm-12 col-md-10 col-lg-10">
    <div class="row justify-content-center h-100">
      <div class="content col-10 col-sm-12 col-md-7 col-lg-5 p-5 align-self-center">
      
        <h1>Tu perfil</h1>
        <hr/><br/>
          
        <div class="d-flex align-content-center justify-content-between mb-4">
          <h4><strong>Full Name</strong></h4>
            <p><span>{{ user.full_name }}</span></p>
          </div>
            
          <div class="d-flex align-content-center justify-content-between mb-4">
            <h4><strong>Username</strong></h4>
            <p><span>{{ user.username }}</span></p>
          </div>
            
          <button @click="deleteAccount()" class="btn-viewmore">Delete Account</button>
        </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Profile',
  created: function() {
    return this.$store.dispatch('viewMe');
  },
  computed: {
    ...mapGetters({user: 'stateUser' }),
  },
  methods: {
    ...mapActions(['deleteUser']),
    async deleteAccount() {
      try {
        await this.deleteUser(this.user.id);
        await this.$store.dispatch('logOut');
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  },
}
</script>

<style>
.cont-profile {

  text-align: left;
}
</style>
