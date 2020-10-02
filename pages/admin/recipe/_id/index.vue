<template>
  <div class="edit-recipe">
    <div class="title">
      שם המתכון:
      <input type="text" name="Title" id="title" placeholder="עוגיות שוקולד" />
    </div>
    מרכיבים:
    <textarea
      name="ingredients"
      class="ingredients"
      id="ingredients"
      cols="30"
      rows="10"
    ></textarea>
    הוראות הכנה:
    <textarea
      name="directions"
      class="directions"
      id="directions"
      cols="30"
      rows="10"
    ></textarea>
    <div class="action-btns">
      <button class="cancle">Cancle</button>
      <button class="save">Save</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.edit-recipe {
  padding: 1rem 3rem;
  background: aliceblue;
  margin: auto;
  margin-top: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  max-width: 1000px;

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

  textarea {
    margin: 0.5rem 0 1rem;
    border-radius: 10px;
    border: 2px solid #d3eaff;

    // &.ingredients {
    //   max-width: 75vw;
    //   min-width: 45vw;
    // }

    // &.directions {
    // }
  }

  input,
  textarea {
    outline-color: #b0d9fc;
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
</style>