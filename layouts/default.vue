<template>
  <div id="app" :class="$mq">
    <div class="top-bar"></div>
    <nuxt-link to="/"><Logo class="logo hover-bounce" /></nuxt-link>
    <Nuxt />
  </div>
</template>

<script>
import Logo from "@/components/Icons/Logo";
import { mapActions } from "vuex";
export default {
  components: {
    Logo,
  },
  methods: {
    ...mapActions(["loadRecipes"]),
  },
  mounted() {
    this.$store.dispatch("loadRecipes", () => {});
  },
};
</script>

<style lang="scss" scoped>
#app {
  .top-bar {
    width: 100%;
    height: 2.5rem;
    background: #d3eaff;
    border-bottom: 3px solid #c1c1c1;
    margin-bottom: 2.5rem;
  }

  .logo {
    width: 4.2rem;
    height: 4.2rem;
    position: absolute;
    top: 0.3rem;
    left: 1.2rem;
    background: white;
    padding: 0.3rem;
    border-radius: 50%;
    border: 3px solid #c1c1c1;
    cursor: pointer;
  }

  &.mobile {
    .logo {
      width: 3.7rem;
      height: 3.7rem;
    }
  }
}
</style>
