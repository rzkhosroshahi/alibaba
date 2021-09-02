<template>
  <svg
    v-if="!!comp"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <component :is="comp" />
  </svg>
</template>

<script>
import iconsMap from "@/constants/icons-map";

export default {
  name: "Icon",
  props: {
    name: {
      type: String,
    },
  },
  computed: {
    comp() {
      if (this.name in iconsMap) {
        return iconsMap[this.name];
      }

      return null;
    },
  },
};
</script>
