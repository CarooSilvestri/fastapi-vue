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
        labels: Object.keys(this.result_per_medic()),
        datasets: [
          {
            label: "Estudios por médico",
            backgroundColor: "#8666abff",
            data: Object.values(this.result_per_medic()),
          },
        ],
      };
    },
    result_per_medic() {
      const result = {}
        this.notes.filter(function(item) {
        
            if (item.author.full_name in result) {
                
                result[item.author.full_name] = result[item.author.full_name] +1;
            } else {

                result[item.author.full_name] = 1;
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