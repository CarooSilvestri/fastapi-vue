<template>
  <div class="col-sm-12 col-md-10 col-lg-10">

     <section id="form-add" class="row justify-content-center h-100">

        <div class="content col-10 col-sm-12 col-md-7 col-lg-5 p-5 align-self-center">
          <h1>Subir nuevo resultado</h1>
          <hr/><br/>
          <form @submit.prevent="submit" class="">

            <div class="mb-4 cont-form">
              <label for="title" class="form-label">Nombre del paciente:</label>
              <input type="text" name="title" v-model="form.title" class="form-control" required/>
            </div>

            <div class="mb-4 cont-form">
              <label for="content" class="form-label">Tipo de resultado:</label>
              <select name="content" v-model="form.content.selected" class="form-select" required>
                <option value="Positivo">Positivo</option>
                <option value="Negativo">Negativo</option>
                <option value="Insuficiente">Insuficiente</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>

            <div class="mb-4 cont-form">
              <label for="gen" class="form-label">Gen evaluado:</label>
              <input type="text" name="gen" v-model="form.content.gen" class="form-control" required/>
            </div>

            <button type="submit" class="btn btn-primary btn-viewmore mt-4">Agregar</button>
          </form>
        </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Dashboard',
  data() {
    return {
      form: {
        title: '',
        content: {selected: '', gen: ''},
      },
    };
  },
  computed: {
    ...mapGetters({ notes: 'stateNotes'}),
     isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    ...mapActions(['createNote']),
    async submit() {
      
      this.form.content = JSON.stringify(this.form.content)
      alert('Resultado agregado correctamente')
      await this.createNote(this.form);
    },
  },
};
</script>

<style>
#form-add {

  padding: 3em;
  margin: 0 auto;
}

.cont-form {

  text-align: left;
  font-weight: bold;
}
</style>