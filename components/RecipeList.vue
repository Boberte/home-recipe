<template>
  <div
    class="recipe-list"
    :style="{
      maxHeight: `${maxHeight}rem`,
    }"
  >
    <RecipePreview
      v-for="(recipe, index) in recipes"
      :recipeId="recipe.id"
      :title="recipe.title"
      :ingredients="recipe.ingredients"
      :photo="recipe.photo"
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
    cardsInLine() {
      return this.$mq == "mobile" ? 2 : this.$mq == "tablet" ? 4 : 6;
    },
    maxHeight(){
      return Math.ceil(Math.max((this.recipes.length / this.cardsInLine), 1)) * 19;
    }
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