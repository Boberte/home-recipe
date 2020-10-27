<template>
  <div class="recipe-list">
    <div
      v-for="(col, i) in cardsCols"
      class="recipe-list-col"
      :key="i"
    >
      <RecipePreview
        v-for="(recipe, index) in col"
        :recipeId="recipe.id"
        :title="recipe.title + `>${index} ${i}`"
        :ingredients="recipe.ingredients"
        :photo="recipe.photo"
        :key="index"
      />
    </div>
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
    cardsCols(){
      return new Array(this.cardsInLine).fill().map((col, i) => this.recipes.reduce((acc, recipe, idx) => {
        if((this.cardsInLine + idx) % this.cardsInLine === i){
          acc.push(recipe)
        }
        return acc;
      }, []))
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  .recipe-list {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .recipe-list-col {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      align-content: space-around;
      flex-direction: column;
    }
  }
}
</style>