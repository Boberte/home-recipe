<template>
  <div class="container">
    <LinkButton to="/admin/recipe/">
      <AddIcon class="add-icon" />
    </LinkButton>
    <RecipeList />
  </div>
</template>

<script>
import RecipeList from "@/components/RecipeList";
import LinkButton from "@/components/LinkButton";
import Add from "@/components/Icons/Add";

export default {
  name: "RecipesCollection",
  components: {
    RecipeList,
    LinkButton,
    AddIcon: Add,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;

  .add-icon {
    fill: #7c7c7c;
    width: 20px;
    height: 20px;
  }
}
</style>
