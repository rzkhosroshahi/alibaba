<template>
  <skeleton v-if="loading" />
  <container v-else-if="list.length" class="countries">
    <router-link
      v-for="country in list"
      class="countries__country"
      :key="country.numericCode"
      :to="`country/${country.name}`"
    >
      <div class="countries__flagWrapper">
        <img :src="country.flag" class="countries__flag" alt="" rel="preload" />
      </div>
      <div class="countries__info">
        <h3 class="countries__title">
          {{ country.name }}
        </h3>
        <p class="countries__details">
          <span class="countries__detailTitle">Population</span>:
          <span class="countries__detailSpec">{{
            country.population | numberFormat
          }}</span>
        </p>
        <p class="countries__details">
          <span class="countries__detailTitle">Region</span>:
          <span class="countries__detailSpec">{{ country.region }}</span>
        </p>
        <p class="countries__details">
          <span class="countries__detailTitle">Capital</span>:
          <span class="countries__detailSpec">{{ country.capital }}</span>
        </p>
      </div>
    </router-link>
  </container>
</template>
<script>
import Skeleton from "./skeleton";
import Container from "@/components/Container";

export default {
  name: "CountriesList",
  components: { Container, Skeleton },
  props: {
    list: {
      type: Array,
    },
    loading: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
