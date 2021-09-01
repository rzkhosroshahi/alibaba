<template>
  <div :class="className" />
</template>
<script>
export default {
  name: "Skeleton",
  props: {
    name: {
      type: String,
    },
  },
  computed: {
    className() {
      return {
        skeleton: true,
        [`skeleton__${this.name}`]: this.name,
      };
    },
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
