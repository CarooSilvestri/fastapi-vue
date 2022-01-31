<template>
  <section class="col-sm-12 col-md-10 col-lg-10">
    <div class="row justify-content-center h-100">
      
      <form @submit.prevent="submit" class="content col-10 col-sm-12 col-md-7 col-lg-3 p-5 align-self-center">
        <h1 class="mb-4">Log in</h1>
        <hr>
        <div class="mb-4">
          <label for="username" class="form-label"><b>Usuario</b></label>
          <input type="text" name="username" placeholder="Ingrese usuario" v-model="form.username" class="form-control" required />
        </div>
        <div class="mb-4">
          <label for="password" class="form-label"><b>Contraseña</b></label>
          <input type="password" name="password" placeholder="Ingrese contraseña" v-model="form.password" class="form-control" required />
        </div>
        <button type="submit" class="btn-viewmore mt-4">Entrar</button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password:'',
      }
    };
  },
  methods: {
    ...mapActions(['logIn']),
    async submit() {
      const User = new FormData();
      User.append('username', this.form.username);
      User.append('password', this.form.password);
      await this.logIn(User);
      this.$router.push('/dashboard');
    }
  }
}
</script>
