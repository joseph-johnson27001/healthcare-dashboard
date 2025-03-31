<template>
  <div class="analytics-page">
    <div class="graphs-section">
      <ContainerCard> </ContainerCard>

      <ContainerCard> </ContainerCard>

      <ContainerCard> </ContainerCard>

      <ContainerCard> </ContainerCard>
    </div>
  </div>
</template>

<script>
import ContainerCard from "@/components/UI/ContainerCard.vue";

export default {
  components: {
    ContainerCard,
  },
};
</script>

<style scoped>
.graphs-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  row-gap: 20px;
}
</style>
