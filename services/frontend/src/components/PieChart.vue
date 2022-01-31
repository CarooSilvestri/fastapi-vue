<template>
  <div class="small">
    <pie-chart :chart-data="datacollection"></pie-chart>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import PieChart from "./PieChart.js";

export default {
  components: { PieChart },
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
        labels: ["Positivos", "Negativos"],
        datasets: [
          {
            backgroundColor: ["green", "red"],
            data: [this.positives().length, this.negatives().length],
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
    negatives() {
      return this.notes.filter(function(item) {
          if (JSON.parse(item.content).selected == 'Negativo') {
            return JSON.parse(item.content)
          }
      })
    },
  },
};
</script>

<style>
.small {
  max-width: 400px;
  margin: 0 auto;
}
</style>