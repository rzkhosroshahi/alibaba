<template>
  <div class="home">
    <Select
      :items="Object.values(regions)"
      :value="region"
      @change="onRegionChange"
    />
    <countries-list :list="list" :loading="isLoading" />
  </div>
</template>

<script>
import { getCountriesByRegion } from "./api/coountries";
import CountriesList from "./components/CountriesList";
import Select from "@/components/Select";
import { regions } from "./constants";

export default {
  name: "Home",
  components: { Select, CountriesList },
  data() {
    return {
      regions,
      list: [],
      region: "Europe",
      isLoading: false,
    };
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    onRegionChange(val) {
      this.region = val;
      this.getCountries(this.region);
    },
    getCountries() {
      this.isLoading = true;
      getCountriesByRegion(this.region)
        .then((data) => {
          this.list = data;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
