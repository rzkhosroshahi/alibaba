<template>
  <div class="home">
    <Select
      :items="Object.values(regions)"
      :value="region"
      @change="onRegionChange"
    />
    <Input
      v-model="search"
      @input="onSearch"
      placeholder="search for a country..."
      icon="search"
    />
    <countries-list :list="list" :loading="isLoading" />
  </div>
</template>

<script>
import { getCountriesByRegion, getCountriesByName } from "./api/countries";
import CountriesList from "./components/CountriesList";
import Select from "@/components/Select";
import Input from "@/components/Input";
import { regions } from "./constants";
import debounce from "../../modules/debounce";

export default {
  name: "Home",
  components: { Select, CountriesList, Input },
  data() {
    return {
      regions,
      list: [],
      region: "Europe",
      search: "",
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
    onSearch: debounce(function () {
      if (this.search) {
        this.searchCountriesByName();
        return;
      }
      this.getCountries();
    }, 500),
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
    searchCountriesByName() {
      this.isLoading = true;
      getCountriesByName(this.search)
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
