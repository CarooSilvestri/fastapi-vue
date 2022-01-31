<template>
  <div v-if="note" class="col-sm-12 col-md-10 col-lg-10">

    <div class="row justify-content-center h-100">
      <div class="content col-10 col-sm-12 col-md-7 col-lg-7 p-5 align-self-center">

        <div class="row justify-content-center">
          <h1 class="mb-4">Resultado del paciente</h1>
          <hr>

          <div class="cont-info col-sm-12 col-md-5 col-lg-5 mt-5">
            <div class="d-flex flex-column mb-2">
              <p class="patient m-0"><strong>Paciente</strong></p>
              <h2>{{ note.title }}</h2>
            </div>
            <div class="d-flex flex-column mb-2">
              <p class="patient m-0"><strong>Doctor</strong></p>
              <h5>{{ note.author.username }}</h5>
            </div>
          </div>
          
          <div class="cont-info col-sm-12 col-md-5 col-lg-5 mb-4 mt-5">
            <div class="d-flex flex-column mb-2">
              <p class="patient m-0"><strong>Resultado</strong></p>
              <h5>{{ JSON.parse(note.content).selected}}</h5>

              <p class="gen align-self-center"><strong>Gen:</strong> {{ JSON.parse(note.content).gen}}</p>
            </div>

          </div>
        </div>

        <div v-if="user.id === note.author.id" class="col-sm-12 col-md-4 col-lg-12 mt-5 align-self-center">
          <router-link :to="{name: 'EditNote', params:{id: note.id}}"><button class="btn-viewmore mb-4">Edit</button></router-link>
          <button @click="removeNote()" class="btn btn-secondary">Delete</button>
        </div>
      </div>  
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Note',
  props: ['id'],
  async created() {
    try {
      await this.viewNote(this.id);
    } catch (error) {
      console.error(error);
      this.$router.push('/dashboard');
    }
  },
  computed: {
    ...mapGetters({ note: 'stateNote', user: 'stateUser'}),
  },
  methods: {
    ...mapActions(['viewNote', 'deleteNote']),
    async removeNote() {
      try {
        await this.deleteNote(this.id);
        this.$router.push('/dashboard');
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>

<style>
.cont-info { text-align: center; }
</style>