
const getRecipes = ()=>  {
    return [{
        id: 1,
        title: "עוגת גזר",
        ingredients: `3 כפות מלח
        ½1 כפות סוכר
        גזר
        קמח
        ביצים
        קינמון
        1.3-1.5 ק''ג סלמון`,
        directions: `מערבבים את המלח והסוכר
        שוטפים את הדג ומייבשים בנייר מגבת
        שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
        מניחים על השיש ומחכים 4 שעות
        מורידים את הלחץ מכסים את הקופסא
        שמים את הדג במקרר ומחכים 8 שעות.
        שוטפים את המלח
        חותכים
        ושמים לפי מנות בנייר אלומיניום
        מה שמתוכנן לאכילה נשמר במקרר
        מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
        photoURL: "https://foodtasia.com/wp-content/uploads/2020/04/carrot-cake-6-683x1024.jpg"
    },
    {
        id: 2,
        title: "סלמון כבוש",
        ingredients: `3 כפות מלח
        ½1 כפות סוכר
        1.3-1.5 ק''ג סלמון`,
        directions: `מערבבים את המלח והסוכר
        שוטפים את הדג ומייבשים בנייר מגבת
        שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
        מניחים על השיש ומחכים 4 שעות
        מורידים את הלחץ מכסים את הקופסא
        שמים את הדג במקרר ומחכים 8 שעות.
        שוטפים את המלח
        חותכים
        ושמים לפי מנות בנייר אלומיניום
        מה שמתוכנן לאכילה נשמר במקרר
        מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
        photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL24vYB9oJpAjLPIjbFeP5O7xS50b_051ROA&usqp=CAU"
    },
    {
        id: 3,
        title: "סלט כרוב",
        ingredients: `3 כפות מלח
        ½1 כפות סוכר
        כרוב
        מיונז
        1.3-1.5 ק''ג סלמון`,
        directions: `מערבבים את המלח והסוכר
        שוטפים את הדג ומייבשים בנייר מגבת
        שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
        מניחים על השיש ומחכים 4 שעות
        מורידים את הלחץ מכסים את הקופסא
        שמים את הדג במקרר ומחכים 8 שעות.
        שוטפים את המלח
        חותכים
        ושמים לפי מנות בנייר אלומיניום
        מה שמתוכנן לאכילה נשמר במקרר
        מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
        photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    },
    // {
    //     id: 4,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 5,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 6,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 7,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 8,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 9,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 10,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 11,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 12,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 13,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 14,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 15,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    // {
    //     id: 15,
    //     title: "סלט כרוב",
    //     ingredients: `3 כפות מלח
    //     ½1 כפות סוכר
    //     כרוב
    //     מיונז
    //     1.3-1.5 ק''ג סלמון`,
    //     directions: `מערבבים את המלח והסוכר
    //     שוטפים את הדג ומייבשים בנייר מגבת
    //     שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
    //     מניחים על השיש ומחכים 4 שעות
    //     מורידים את הלחץ מכסים את הקופסא
    //     שמים את הדג במקרר ומחכים 8 שעות.
    //     שוטפים את המלח
    //     חותכים
    //     ושמים לפי מנות בנייר אלומיניום
    //     מה שמתוכנן לאכילה נשמר במקרר
    //     מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
    //     photoURL: "https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"
    // },
    {
        id: 16,
        title: "עוגיות חמאה",
        ingredients: `3 כפות מלח
        ½1 כפות סוכר
        חמאה
        שמנת
        שמן
        קמח
        ביצים
        אבקת סוכר
        סודה לשתיה
        1.3-1.5 ק''ג סלמון`,
        directions: `מערבבים את המלח והסוכר
        שוטפים את הדג ומייבשים בנייר מגבת
        שמים את התערובת על הדג מכל כיוון, מכסים תוך כדי הפעלת לחץ. ניתן להשתמש בבקבוק מים מלא או תבנית אפייה.
        מניחים על השיש ומחכים 4 שעות
        מורידים את הלחץ מכסים את הקופסא
        שמים את הדג במקרר ומחכים 8 שעות.
        שוטפים את המלח
        חותכים
        ושמים לפי מנות בנייר אלומיניום
        מה שמתוכנן לאכילה נשמר במקרר
        מה שלא מתוכנן לאכילה נשמר במקפיא עד שבוע.`,
        photoURL: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/18134-five-star-chocolate-chip-cookies-600x600.jpg?ext=.jpg"
    }];
}


export {
    getRecipes
}