<template>
  <container class="country">
    <div class="country__back">
      <skeleton name="chip" />
    </div>
    <div class="country__wrapper">
      <div class="country__flag">
        <skeleton name="img" />
      </div>
      <div class="country__info">
        <skeleton name="h" class="country__title" />
        <div class="country__specs">
          <div class="country__details">
            <skeleton class="country__detailTitle" name="p" />
          </div>
          <div class="country__details">
            <skeleton class="country__detailTitle" name="p" />
          </div>
          <div class="country__details">
            <skeleton class="country__detailTitle" name="p" />
          </div>
          <div class="country__details">
            <skeleton class="country__detailTitle" name="p" />
          </div>
          <div class="country__details">
            <skeleton class="country__detailTitle" name="p" />
          </div>
          <div class="country__details">
            <skeleton class="country__detailTitle" name="p" />
          </div>
          <div class="country__details">
            <skeleton class="country__detailSpec" name="p" />
          </div>
          <div class="country__details">
            <skeleton class="country__detailTitle" name="p" />
          </div>
        </div>
      </div>
    </div>
  </container>
</template>
<script>
import Skeleton from "@/components/Skeleton/index.vue";
import Container from "@/components/Container";

export default {
  components: { Container, Skeleton },
};
</script>
