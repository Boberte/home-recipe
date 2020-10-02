<template>
  <div class="recipe-page">
    <div class="recipe-header">
      <h1 class="title">{{ recipe.title }}</h1>
      <div
        class="picture"
        :style="{
          backgroundImage: `url(${recipe.photoURL})`,
        }"
      ></div>
    </div>
    <div class="content">
      <h4>מרכיבים:</h4>
      <p class="ingredients">
        {{ recipe.ingredients }}
      </p>
      <h4>הוראות הכנה:</h4>
      <p>
        {{ recipe.directions }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getRecipeById"]),
  },
  data() {
    return {
      recipe: {},
    };
  },
  mounted() {
    this.recipe = this.getRecipeById(this.$route.params.id) || {};
  },
};
</script>

<style lang="scss" scoped>
#app {
  .recipe-page {
    margin: 2em;
    padding: 2em;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    background: white;

    .recipe-header {
      display: flex;
      padding: 0 2em 0 0;
      justify-content: flex-end;
      background: aliceblue;
      border-radius: 5px;
      align-items: center;

      .title {
        font-size: 2em;
        margin-left: 1em;
        color: #1b2126;
      }

      .picture {
        flex-grow: 1;
        min-height: 8em;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    .content {
      padding: 2rem;
      white-space: pre-line;

      .ingredients {
        margin-bottom: 1.5rem;
      }
    }
  }

  &.mobile {
    .recipe-page {
      margin: 0.7rem;
      padding: 0;

      .recipe-header {
        padding: 0;
        overflow: hidden;
        justify-content: center;
        align-items: flex-end;
        position: relative;

        .title {
          font-size: 1.8em;
          margin-left: 0;
          position: absolute;
          text-align: center;
          background: linear-gradient(0deg, #e1e1e1 10%, transparent);
          width: 100%;
          padding: 2rem 0 0.5rem;
        }

        .picture {
          min-height: 6rem;
          background-size: 100% auto;
          background-position-y: 35%;
        }
      }

      .content {
        padding: 1rem;
      }
    }
  }
}
</style>