<template>
  <div class="select" @click="toggleOpenItems">
    <input class="select__input" :value="value" readonly />
    <div v-if="items.length" :class="itemsClassName">
      <div v-for="item in items" :key="item">
        <div @click="handleChangeValue(item)" class="select__item">
          {{ item }}
        </div>
      </div>
    </div>
    <chevron-down class="chevron" :class="iconClassName" />
  </div>
</template>
<script>
import ChevronDown from "./ChevronDown";

export default {
  name: "Select",
  components: { ChevronDown },
  props: {
    value: {
      type: String,
    },
    items: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
  computed: {
    itemsClassName() {
      return {
        select__items: true,
        "select__items--open": this.isOpen,
      };
    },
    iconClassName() {
      return {
        select__chevron: true,
        "select__chevron--open": this.isOpen,
      };
    },
  },
  methods: {
    handleChangeValue(val) {
      this.$emit("change", val);
    },
    toggleOpenItems() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
