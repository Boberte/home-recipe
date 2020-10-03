<template>
  <nuxt-link :to="`/recipe/${recipeId}`">
    <div class="recipe-preview hover-bounce">
      <div class="title">{{ title }}</div>
      <div class="ingredients" :style="{ backgroundImage: `url(${photoURL})` }">
        <div class="ingredients-background"></div>
        <p>{{ ingredients }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    recipeId: {
      required: true,
      type: String | Number,
    },
    title: {
      required: true,
      type: String,
    },
    ingredients: {
      required: false,
      default: "",
      type: String,
    },
    photoURL: {
      required: false,
      default: "",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  overflow: hidden;
  margin: 0.5rem;

  .ingredients,
  .title {
    white-space: pre-line;
  }

  .ingredients {
    flex-grow: 1;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    background-size: cover;
    min-height: 14rem;

    p {
      width: 100%;
      padding: 1rem 0.5rem;
      position: relative;
      color: black;
      z-index: 1;
    }

    .ingredients-background {
      background: linear-gradient(0deg, #ffffff21, #c1c1c1, white 135%);
      height: 100%;
      width: 100%;
      transition: opacity 0.5s ease-in-out;
      position: absolute;
      top: 0;
    }
  }

  .title {
    padding: 0.2rem 1rem;
    width: 100%;
    color: aliceblue;
    font-size: 18px;
    text-align: center;
  }

  &:hover {
    .title {
      color: white;
    }

    .ingredients {
      .ingredients-background {
        opacity: 0;
      }
    }
  }
}
</style>