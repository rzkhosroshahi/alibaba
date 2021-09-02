<template>
  <div class="input">
    <icon v-if="icon" :name="icon" class="input__icon" />
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      class="input__input"
    />
    <div class="input__slot">
      <slot />
    </div>
  </div>
</template>
<script>
import Icon from "../Icon";

export default {
  components: { Icon },
  props: {
    value: String,
    placeholder: String,
    icon: String,
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
