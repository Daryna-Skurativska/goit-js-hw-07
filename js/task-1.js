const categories = document.querySelector("#categories");
const categoriesItem = document.querySelectorAll(".item");

console.log("Number of categories: ", categoriesItem.length);

categoriesItem.forEach((item) => {
  const categoryName = item.querySelector("h2");
  const numberOfItems = item.querySelectorAll("ul li").length;

  console.log("Category: ", categoryName.textContent);
  console.log("Elements: ", numberOfItems);
});
