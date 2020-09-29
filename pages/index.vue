<template>
  <div class="container">
    <!-- <nuxt-link to="/recipe/2">Salmon</nuxt-link> -->
    <RecipePreview recipeId="2"
      title="סלמון כבוש" :ingredients="'סלמון\nמלח\nסוכר\nעשבי תיבול'"
      photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL24vYB9oJpAjLPIjbFeP5O7xS50b_051ROA&usqp=CAU"
    />
  </div>
</template>

<script>
import RecipePreview from "@/components/RecipePreview"
export default {
  components: {
    RecipePreview
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
