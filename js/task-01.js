const categoriesList = document.querySelectorAll("#categories .item");
const numberCat = categoriesList.length;
console.log(`Number of categories: ${numberCat}`);

//half part

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const numberElements = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberElements}`);
});
