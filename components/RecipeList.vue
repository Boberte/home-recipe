<template>
  <div
    class="recipe-list"
    :style="{
      maxHeight: `${
        $mq == 'mobile' ? (recipes.length / 2) * 18 : (recipes.length / 6) * 20
      }rem`,
    }"
  >
    <RecipePreview
      v-for="(recipe, index) in recipes"
      :recipeId="recipe.id"
      :title="recipe.title"
      :ingredients="recipe.ingredients"
      :photoURL="recipe.photoURL"
      :key="index"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RecipePreview from "@/components/RecipePreview";

export default {
  components: {
    RecipePreview,
  },
  computed: {
    ...mapGetters(["recipes"]),
  },
};
</script>

<style lang="scss" scoped>
#app {
  .recipe-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
  }
}
</style>