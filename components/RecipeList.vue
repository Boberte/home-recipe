<template>
  <div class="recipe-list">
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

<style>
.recipe-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>