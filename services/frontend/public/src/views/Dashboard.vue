<template>
  <div v-if="notes.length" class="cont-ppal p-5 col-lg-10 col-sm-12 col-md-12">
    <h1>Dashboard</h1>
    <hr>
    <div class="graphics row p-5">
      <Graphs />
    </div> 
    
    <section class="row mt-5 p-5">
      <h1>Listado de resultados</h1>
      <hr>
      <br>
      <div v-if="notes.length" class="d-flex flex-wrap justify-content-evenly">
        <div v-for="note in notes" :key="note.id" class="notes">

          <div class="card alig-items-stretch m-1 p-3">
            <div class="card-body">
              <div class="d-flex flex-column mb-2">
                <p class="patient m-0"><strong>Paciente</strong></p>
                <h2>{{ note.title }}</h2>
              </div>

              <div class="d-flex flex-column mb-2">
                <p class="patient m-0"><strong>Doctor</strong> </p>
                <p>{{ note.author.username }}</p>
              </div>
              
              <p class="patient m-0"><strong>Resultado</strong></p>
              <div class="d-flex justify-content-between">
                <p>{{ JSON.parse(note.content).selected }}</p>
                <p class="gen"><strong>{{ JSON.parse(note.content).gen }}</strong></p>
              </div>  
              <router-link :to="{name: 'Note', params:{id: note.id}}"><button class="btn-viewmore mt-4">Ver más</button></router-link>
            </div>
          </div>
          <br/>
        </div>
      </div>

      <div v-else>
        <p class="txt-big">Nothing to see. Check back later.</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Graphs from '../components/Graphs.vue';
export default {
  components: { Graphs },
  name: 'Dashboard',
  computed: {
    ...mapGetters({ notes: 'stateNotes'}),
    
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    }
  },
};

</script>

<style>
.cont-ppal {

  text-align: left;
  height: 100%;
}

.card {
  
  width: 18rem;
  margin: 1rem;
  text-align: left;
  border-radius: 10px;
}

.patient {

  color: grey;
  font-size: 10pt;
}

.gen {

  background-color: gainsboro;  
  border-radius: 30px;
  width: fit-content;
  padding: 0.25em 1em 0.25em 1em;
  font-size: 10pt;
}
</style>