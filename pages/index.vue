<template>
  <div class="container">
    <nuxt-link to="/admin/recipe/2" class="btn add-new hover-bounce">
      <AddIcon class="add-icon" />
    </nuxt-link>
    <RecipeList />
  </div>
</template>

<script>
import RecipeList from "@/components/RecipeList";
import Add from "@/components/Icons/Add";

export default {
  components: {
    RecipeList,
    AddIcon: Add,
  }
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
    display: grid;
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
