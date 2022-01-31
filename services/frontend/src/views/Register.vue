<template>
  <section class="col-sm-12 col-md-10 col-lg-10">
    <div class="row justify-content-center h-100">
      
    <form @submit.prevent="submit" class="content col-10 col-sm-12 col-md-7 col-lg-3 p-5 align-self-center">
      <h1 class="mb-4">Registro</h1>
      <hr>
      <div class="mb-4">
          <label for="username" class="form-label"><b>Usuario</b></label>
          <input type="text" name="username" placeholder="Ingrese un usuario" v-model="user.username" class="form-control" required/>
        </div>
        <div class="mb-4">
          <label for="full_name" class="form-label"><b>Nombre Completo</b></label>
          <input type="text" name="full_name" placeholder="Ingrese nombre completo" v-model="user.full_name" class="form-control" required/>
        </div>
        <div class="mb-4">
          <label for="password" class="form-label"><b>Contraseña</b></label>
          <input type="password" name="password" placeholder="Ingrese una contraseña" v-model="user.password" class="form-control" required/>
        </div>
        <button type="submit" class="btn-viewmore mt-4">Registrarme</button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Register',
  data() {
    return {
      user: {
        username: '',
        full_name: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(['register']),
    async submit() {
      try {
        await this.register(this.user);
        this.$router.push('/dashboard');
      } catch (error) {
        throw 'Username already exists. Please try again.';
      }
    },
  },
};
</script>
