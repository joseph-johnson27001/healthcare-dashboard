<template>
  <div class="analytics-page">
    <div class="graphs-section">
      <ContainerCard>
        <PatientAdmissionsGraph />
      </ContainerCard>

      <ContainerCard>
        <DepartmentVolumeGraph />
      </ContainerCard>

      <ContainerCard>
        <AverageStayLengthGraph />
      </ContainerCard>

      <ContainerCard> </ContainerCard>
    </div>
  </div>
</template>

<script>
import ContainerCard from "@/components/UI/ContainerCard.vue";
import PatientAdmissionsGraph from "@/components/Graphs/PatientAdmissionsGraph.vue";
import DepartmentVolumeGraph from "@/components/Graphs/DepartmentVolumeGraph.vue";
import AverageStayLengthGraph from "@/components/Graphs/AverageStayLengthGraph.vue";

export default {
  components: {
    ContainerCard,
    PatientAdmissionsGraph,
    DepartmentVolumeGraph,
    AverageStayLengthGraph,
  },
};
</script>

<style>
select {
  font-family: "Assistant";
  outline: none;
  padding: 10px 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.graphs-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  row-gap: 20px;
}

@media (max-width: 1000px) {
  .graphs-section {
    grid-template-columns: 1fr;
  }
}
</style>
