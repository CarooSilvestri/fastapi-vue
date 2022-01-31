<template>
  <aside class="col-12">
    <div class="row justify-content-evenly">
      <div class="content col-sm-12 col-md-6 col-lg-4 p-5 align-self-center">
        <h4> Cantidad de estudios realizados por médicos </h4>
        <BarMedics />
      </div>

      <div class="content col-sm-12 col-md-12 col-lg-4 p-5 m-2">
        <h4> Resultados </h4>
        <PieChart />
      </div>
    </div>

    <div class="row justify-content-evenly mt-5">      
      <div class="content col-sm-12 col-md-12 col-lg-9 p-5 m-2">
        <h4> Valores positivos por gen </h4>
        <BarGen />
      </div>
    </div>
  </aside>
</template>

<script>
import BarMedics from "../components/BarMedics.vue";
import BarGen from "../components/BarGen.vue";
import PieChart from "../components/PieChart.vue";

export default {
  name: 'Graphs',
  components: { PieChart, BarMedics, BarGen }
};


</script>

<style>
h4 { text-align: center; }
</style>