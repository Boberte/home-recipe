<template>
  <div class="recipe-page">
    <div class="recipe-header">
      <h1 class="title">{{ recipe.title }}</h1>
      <img :src="recipe.photoURL" class="picture" />
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
    <LinkButton :to="`/admin/recipe/${recipe.id}`">
      <EditIcon class="edit-icon" />
    </LinkButton>
  </div>
</template>

<script>
import LinkButton from "@/components/LinkButton";
import Edit from "@/components/Icons/Edit";
import { mapGetters } from "vuex";
export default {
  name: "Recipe",
  components: {
    EditIcon: Edit,
    LinkButton,
  },
  computed: {
    ...mapGetters(["getRecipeById"]),
    recipe() {
      return this.getRecipeById(this.$route.params.id) || {};
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  .recipe-page {
    margin: 2em auto;
    padding: 2em;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    background: white;
    max-width: 1000px;
    display: flex;

    .recipe-header {
      display: flex;
      padding: 0.7rem;
      justify-content: space-between;
      background: aliceblue;
      border-radius: 5px;
      align-items: center;
      flex-direction: column;
      flex-basis: 35%;

      .title {
        font-size: 2em;
        margin: 1em 0;
        color: #1b2126;
      }

      .picture {
        width: 100%;
        object-fit: contain;
      }
    }

    .content {
      padding: 2rem;
      white-space: pre-line;

      .ingredients {
        margin-bottom: 1.5rem;
      }
    }

    .edit-icon {
      width: 25px;
      height: 25px;
      color: #7c7c7c;
    }
  }

  &.tablet,
  &.mobile {
    .recipe-page {
      margin: 0.7rem;
      padding: 0;
      flex-direction: column;

      .recipe-header {
        padding: 0;
        overflow: hidden;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        flex-direction: row;

        .title {
          font-size: 1.8em;
          margin: 0;
          position: absolute;
          text-align: center;
          background: linear-gradient(0deg, #e1e1e1 10%, transparent);
          width: 100%;
          padding: 2rem 0 0.5rem;
        }

        .picture {
          height: 6rem;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      .content {
        padding: 1rem;
      }
    }
  }

  &.tablet {
    .recipe-page {
      .recipe-header {
        .title {
          height: 8vh;
        }
        .picture {
          height: 30vh;
        }
      }
    }
  }
}
</style>