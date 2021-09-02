<template>
  <container class="countries">
    <div v-for="country in 20" class="countries__country" :key="country">
      <skeleton name="img" />
      <div class="countries__info">
        <skeleton name="h" class="countries__title" />
        <div></div>
        <skeleton name="p" class="countries__details" />
        <skeleton name="p" class="countries__details" />
        <skeleton name="p" class="countries__details" />
      </div>
    </div>
  </container>
</template>
<script>
import Skeleton from "@/components/Skeleton";
import Container from "@/components/Container";

export default {
  components: { Container, Skeleton },
};
</script>
<style lang="scss" src="./style.scss"></style>
