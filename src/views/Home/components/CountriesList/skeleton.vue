<template>
  <div class="countries">
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
  </div>
</template>
<script>
import Skeleton from "@/components/Skeleton";

export default {
  components: { Skeleton },
};
</script>
<style lang="scss" src="./style.scss"></style>
