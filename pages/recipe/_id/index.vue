<template>
  <div class="recipe-page">
    <div class="recipe-header">
      <h1 class="title">מתכון - סלמון מעושן/מלוח</h1>
      <div
        class="picture"
        :style="{
          backgroundImage:
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL24vYB9oJpAjLPIjbFeP5O7xS50b_051ROA&usqp=CAU)',
        }"
      ></div>
    </div>
    <div class="content">
      <p>
        מרכיבים:
        3 כפות מלח
        ½1 כפות סוכר
        1.3-1.5 ק''ג סלמון

        מערבבים את המלח והסוכר
        שוטפים את הדג ומייבשים בנייר מגבת
        שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
        מניחים על השיש ומחכים 4 שעות
        מורידים את הלחץ מכסים את הקופסא
        שמים את הדג במקרר ומחכים 8 שעות.
        שוטפים את המלח
        חותכים
        ושמים לפי מנות בנייר אלומיניום
        מה שמתוכנן לאכילה נשמר במקרר
        מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
      order: 2;
      margin-left: 1em;
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
    text-align: right;
    direction: rtl;
  }
}
</style>