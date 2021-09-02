<template>
  <p v-if="isLoading">loading...</p>
  <section v-else-if="country" class="country">
    <div class="country__back">
      <chips to="/" class="country__backBtn">
        <icon name="arrow-left" class="country__arrow" />
        <span>Back</span>
      </chips>
    </div>
    <div class="country__wrapper">
      <div class="country__flag">
        <img :src="country.flag" class="country__img" rel="preload" alt="" />
      </div>
      <div class="country__info">
        <h2 class="country__title">
          {{ country.name }}
        </h2>
        <div class="country__specs">
          <p class="country__details">
            <span class="country__detailTitle">Native Name</span>:
            <span class="country__detailSpec">{{ country.nativeName }}</span>
          </p>
          <p class="country__details">
            <span class="country__detailTitle">Population</span>:
            <span class="country__detailSpec">{{ country.population }}</span>
          </p>
          <p class="country__details">
            <span class="country__detailTitle">Region</span>:
            <span class="country__detailSpec">{{ country.region }}</span>
          </p>
          <p class="country__details">
            <span class="country__detailTitle">Sub Region</span>:
            <span class="country__detailSpec">{{ country.subregion }}</span>
          </p>
          <p class="country__details">
            <span class="country__detailTitle">Capital</span>:
            <span class="country__detailSpec">{{ country.capital }}</span>
          </p>
          <p class="country__details">
            <span class="country__detailTitle">Top Level Domain</span>:
            <span class="country__detailSpec">
              {{ country.topLevelDomain.join(",") }}
            </span>
          </p>
          <p class="country__details">
            <span class="country__detailTitle">currencies</span>:
            <span
              class="country__detailSpec"
              v-for="cr in country.currencies"
              :key="cr.code"
            >
              {{ cr.code }}
            </span>
          </p>
          <p class="country__details">
            <span class="country__detailTitle">Languages</span>:
            <span
              class="country__detailSpec"
              v-for="ln in country.languages"
              :key="ln.name"
            >
              {{ ln.name }}
            </span>
          </p>
        </div>
        <div v-if="country.borders.length" class="country__borders">
          <span class="country__borderTitle">Border Countries: </span>
          <div class="country__borderItems">
            <chips
              v-for="border in country.borders"
              :key="border"
              class="country__borderItem"
              sm
            >
              {{ border }}
            </chips>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { getCountriesByCode } from "./api";
import Chips from "@/components/chips";
import Icon from "../../components/Icon";

export default {
  name: "Details",
  data() {
    return {
      country: null,
      isLoading: false,
    };
  },
  components: {
    Icon,
    Chips,
  },
  mounted() {
    const { code } = this.$route.params;
    this.isLoading = true;
    getCountriesByCode(code)
      .then((data) => {
        this.country = data;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
