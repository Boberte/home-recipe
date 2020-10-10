<template>
  <div class="edit-recipe">
    <div class="form">
      <div class="title">
        שם המתכון:
        <input
          type="text"
          name="Title"
          id="title"
          placeholder="עוגיות שוקולד"
          v-model="recipe.title"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        @change="readURL"
        ref="imageInput"
        hidden
      />
      מרכיבים:
      <textarea
        name="ingredients"
        class="ingredients"
        id="ingredients"
        cols="30"
        :rows="$mq == 'mobile' ? 8 : 10"
        v-model="recipe.ingredients"
      ></textarea>
      הוראות הכנה:
      <textarea
        name="directions"
        class="directions"
        id="directions"
        cols="30"
        :rows="$mq == 'mobile' ? 11 : 15"
        v-model="recipe.directions"
      ></textarea>
      <div class="action-btns">
        <button class="cancle" @click="$router.go(-1)">Cancle</button>
        <button class="save" @click="save">Save</button>
      </div>
    </div>
    <img
      v-if="recipe.photo"
      :src="recipe.photo"
      @click="$refs.imageInput.click()"
    />
    <div v-else class="image-placeholder" @click="$refs.imageInput.click()">
      <CameraIcon />
      <span>Upload image</span>
    </div>
  </div>
</template>

<script>
import Camera from "@/components/Icons/Camera";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "RecipeForm",
  components: {
    CameraIcon: Camera,
  },
  data() {
    return {
      isNew: true,
      recipe: {
        title: "",
        ingredients: "",
        directions: "",
        photo: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getRecipeById"]),
    trimmedRecipe() {
      return {
        ...this.recipe,
        ingredients: this.recipe.ingredients.trim(),
        directions: this.recipe.directions.trim(),
      };
    },
  },
  async mounted() {
    setTimeout(() => {
      if (this.$route.params.id) {
        this.isNew = false;
        this.recipe = { ...(this.getRecipeById(this.$route.params.id) || {}) };
      }
    }, 0);
  },
  methods: {
    ...mapActions(["createRecipe", "updateRecipe"]),
    async createNewRecipe() {
      const newId = await this.createRecipe(this.trimmedRecipe);
      this.$router.push(`/recipe/${newId}`);
    },
    async save() {
      if (this.isNew) {
        this.createNewRecipe();
      } else {
        await this.updateRecipe(this.trimmedRecipe);
        this.$router.push(`/recipe/${this.recipe.id}`);
      }
    },
    readURL(ev) {
      if (ev.target.files && ev.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.recipe.photo = e.target.result;
        };
        reader.readAsDataURL(ev.target.files[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  .edit-recipe {
    background: aliceblue;
    margin: auto;
    margin-top: 2rem;
    border-radius: 10px;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;

    img,
    .image-placeholder {
      width: 35%;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      background: #e0e0e0;
      border: 3px solid #b0d9fc;
      display: flex;
      justify-content: center;
      object-fit: cover;
      cursor: pointer;
      flex-direction: column;
      align-items: center;
      color: gray;
      transition: all 0.3s ease-in-out;

      svg {
        color: #b3b3b3;
        width: 5rem;
      }
      svg,
      span {
        transition: transform 0.3s cubic-bezier(0.38, 1.72, 0.58, 1.57);
      }

      &:hover {
        background: #cecece;
        svg {
          color: #868585;
          transform: scale(1.05);
        }
        span {
          transform: scale(1.05);
        }
      }
    }
    .form {
      padding: 1rem 3rem;
      display: flex;
      flex-direction: column;

      .title {
        margin: 0.5rem;
        font-size: 18px;
        align-self: center;

        input {
          font-size: 24px;
          min-width: 40vw;
          max-width: 75vw;
          border-radius: 10px;
          border: 0px;
          background: #e3f2ff;
          padding: 13px;
        }
      }

      input[type="file"] {
        margin: 0.5rem 0 0 0;
        height: 2rem;
        position: relative;
      }
      input::-webkit-file-upload-button {
        position: absolute;
        bottom: 5px;
      }

      textarea {
        margin: 0.5rem 0 1rem;
        border-radius: 10px;
        border: 2px solid #d3eaff;
        font-family: inherit;
        font-size: inherit;
      }

      input,
      textarea {
        outline-color: #b0d9fc;
        cursor: pointer;
      }

      .action-btns {
        align-self: center;
        font-size: 16px;
        height: 3rem;
        display: flex;
        align-items: flex-end;

        button {
          padding: 0.5rem 1.5rem;
          border-radius: 10px;
          border: 0px;
          margin: 0.5rem;
          transition: all 0.2s ease-in-out;
          outline: none;
          border-bottom: 4px solid;
          border-right: 3px solid;

          &.save {
            background: #9ad087;
            border-bottom-color: #2a862e;
            border-right-color: #246627;
          }
          &.cancle {
            background: #d9d9d9;
            border-bottom-color: #574f4f;
            border-right-color: #1b2126;
          }
          &:hover {
            filter: brightness(0.9);
            border-bottom-width: 3px;
          }
          &:active {
            filter: brightness(0.8);
            border-bottom-width: 0px;
          }
        }
      }
    }
  }
  &.mobile {
    .edit-recipe {
      margin: 0.7rem;
      flex-direction: column-reverse;

      img,
      .image-placeholder {
        width: 100%;
        height: 6rem;
        border-radius: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-size: 0.8rem;

        svg {
          width: 2.7rem;
        }
      }

      .form {
        padding: 0.6rem 1rem;

        textarea {
          font-size: 14px;
        }

        .title {
          font-size: 18px;
          margin: 0;
          text-align: center;

          input {
            padding: 0.4rem;
            margin: 0.3rem 0 0.5rem;
            width: 100%;
            max-width: unset;
          }
        }
      }
    }
  }
}
</style>