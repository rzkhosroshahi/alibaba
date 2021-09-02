<template>
  <div class="select" @click="toggleOpenItems">
    <input class="select__input" :value="value" readonly />
    <div v-if="items.length" :class="itemsClassName">
      <div v-for="item in items" :key="item">
        <div @click="handleChangeValue(item)" :class="itemClassName(item)">
          {{ item }}
        </div>
      </div>
    </div>
    <icon name="chevron-down" :class="iconClassName" />
  </div>
</template>
<script>
import Icon from "../Icon";

export default {
  name: "Select",
  components: { Icon },
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
      isOpen: false,
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
    itemClassName(item) {
      return {
        select__item: true,
        "select__item--selected": this.value === item,
      };
    },
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
