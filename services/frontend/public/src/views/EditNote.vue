<template>
  <section class="col-10 col-sm-12 col-md-10 col-lg-10">
    <div class="row justify-content-center h-100">
      
      <form @submit.prevent="submit" class="content col-10 col-sm-12 col-md-7 col-lg-4 p-5 align-self-center"> 
        <h1>Edit note</h1>
        <hr/><br/>
        <div class="cont-form mb-4">
          <label for="title" class="form-label">Paciente</label>
          <input type="text" name="title" v-model="form.title" class="form-control" />
        </div>
        
        <div class="cont-form mb-4">
          <label for="content" class="form-label">Content:</label>
          <textarea name="content" v-model="form.content" class="form-control"></textarea>
        </div>
        
        <div class="cont-form mb-4">
          <label for="content" class="form-label">Content:</label>
          <textarea name="content" v-model="form.content" class="form-control"></textarea>
        </div>
        <button type="submit" class="btn-viewmore mt-4">Editar</button>
    </form>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'EditNote',
  props: ['id'],
  data() {
    return {
      form: {
        title: '',
        content: {selected: '', gen: ''},
      },
    };
  },
  created: function() {
    this.GetNote();
  },
  computed: {
    ...mapGetters({ note: 'stateNote' }),
  },
  methods: {
    ...mapActions(['updateNote', 'viewNote']),
    async submit() {
    try {
      let note = {
        id: this.id,
        form: this.form,
      };
      await this.updateNote(note);
      this.$router.push({name: 'Note', params:{id: this.note.id}});
    } catch (error) {
      console.log(error);
    }
    },
    async GetNote() {
      try {
        await this.viewNote(this.id);
        this.form.title = this.note.title;
        this.form.content = this.note.content;
      } catch (error) {
        console.error(error);
        this.$router.push('/dashboard');
      }
    }
  },
};
</script>
