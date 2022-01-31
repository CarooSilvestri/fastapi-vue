<template>
  <div class="small">
    <bar-chart :chart-data="datacollection"></bar-chart>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import BarChart from "./Bar.js";

export default {
  components: { BarChart },
  data() {
    return {
      datacollection: null,
    };
    },
  mounted() {
    this.fillData();
  },
  computed: {
    ...mapGetters({ notes: 'stateNotes'}),
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: Object.keys(this.result_per_gen()),
        datasets: [
          {
            label: "Estudios positivos por gen",
            backgroundColor: "#8666abff",
            data: Object.values(this.result_per_gen()),
          },
        ],
      };
    },
    positives() {
      return this.notes.filter(function(item) {
          if (JSON.parse(item.content).selected == 'Positivo') {
            return JSON.parse(item.content)
          }
      })
    },
    result_per_gen() {
        const result = {}
        var positives = this.positives()
        positives.filter(function(item) {
        
            if (JSON.parse(item.content).gen in result) {
                
                result[JSON.parse(item.content).gen] = result[JSON.parse(item.content).gen] +1;
            } else {

                result[JSON.parse(item.content).gen] = 1;
            }
            return result
        })
        return result
    },
        
  },
};
</script>

<style>
</style>