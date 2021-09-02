<template>
  <header class="header">
    <container class="header__wrapper">
      <h2 class="header__title">Where in the world?</h2>
      <div class="header__darkMode" @click="handleDarkMode">
        <icon name="moon" class="header__moonIcon" />
        <p class="header__darkText">Dark Mode</p>
      </div>
    </container>
  </header>
</template>
<script>
import Icon from "../Icon";
import Container from "@/components/Container";

export default {
  name: "Header",
  components: { Icon, Container },
  data() {
    return {
      isDark: false,
    };
  },
  mounted() {
    this.applyTheme();

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkQuery.addEventListener("change", (e) => {
      const currentTheme = e.target.matches ? "dark" : "light";
      this.applyTheme(currentTheme);
    });
  },
  methods: {
    handleDarkMode() {
      this.isDark = !this.isDark;

      if (this.isDark) {
        document.documentElement.dataset.userColorScheme = "dark";
        localStorage.setItem("theme", "dark");
        return;
      }
      document.documentElement.dataset.userColorScheme = "light";
      localStorage.setItem("theme", "light");
    },
    getOsTheme() {
      return getComputedStyle(document.documentElement)
        .getPropertyValue("--color-mode")
        .replace(/"/gi, "")
        .trim();
    },
    getStoredTheme() {
      return window.localStorage.getItem("theme");
    },
    applyTheme(theme) {
      const storedTheme = this.getStoredTheme();
      const osTheme = this.getOsTheme();
      const preferredColor = theme || osTheme;
      const fallBack = storedTheme || preferredColor;

      document.documentElement.dataset.userColorScheme = fallBack;
      this.isDark = fallBack === "dark";
    },
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
