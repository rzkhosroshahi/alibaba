<template>
  <div class="home">
    <countries-list :list="list" :loading="isLoading" />
  </div>
</template>

<script>
import { getCountriesByRegion } from "./api/coountries";
import CountriesList from "./components/CountriesList";

export default {
  name: "Home",
  components: { CountriesList },
  data() {
    return {
      list: [],
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    getCountriesByRegion()
      .then((data) => {
        this.list = data;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
  methods: {},
};
</script>
