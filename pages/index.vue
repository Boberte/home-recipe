<template>
  <div class="container">
    <!-- <nuxt-link to="/recipe/2">Salmon</nuxt-link> -->
    <div class="btn add-new">
      <nuxt-link to="/admin/recipe/2"><AddIcon class="add-icon" /></nuxt-link>
    </div>
    <RecipeList />
  </div>
</template>

<script>
import RecipeList from "@/components/RecipeList";
import Add from "@/components/Icons/Add";
import { mapActions } from "vuex";

export default {
  components: {
    RecipeList,
    AddIcon: Add,
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
.container {
  margin: 0 auto;

  .add-new {
    background: white;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    text-align: center;
    font-size: 30px;
    border-bottom-color: #b0d9fc;
    border-right-color: #98d0ff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    .add-icon {
      fill: #7c7c7c;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
