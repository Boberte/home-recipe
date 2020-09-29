<template>
  <nuxt-link :to="`/recipe/${recipeId}`">
    <div class="recipe-preview">
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
      type: Number,
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
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.38, 1.72, 0.58, 1.57);

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

    p {
      height: 100%;
      width: 100%;
      padding: 1rem 0.5rem;
      position: absolute;
      top: 0;
      color: black;
    }

    .ingredients-background {
      background: linear-gradient(0deg, #ffffff21, #c1c1c1);
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
  }

  &:hover {
    transform: scale(1.05);

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