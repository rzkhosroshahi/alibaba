<template>
  <component :is="cmp" :to="to" :class="className">
    <slot />
  </component>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
    },
    sm: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cmp() {
      return this.to ? "router-link" : "div";
    },
    className() {
      return {
        chip: true,
        [`chip--sm`]: this.sm,
        [`chip--link`]: this.to,
      };
    },
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
