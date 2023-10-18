import { navigation } from "./variables.js";
import { arr_nav } from "./utils.js";

function createNav() {
  const div_logo = document.createElement("div");
  const div_nav = document.createElement("div");
  const img_one = document.createElement("img");
  const img_two = document.createElement("img");
  const ul_list = document.createElement("ul");

  div_logo.classList.add("logo_nav");
  div_nav.classList.add("contents_nav");
  ul_list.classList.add("ul_list");

  arr_nav.forEach((elem) => {
    const li_items = document.createElement("li");
    li_items.textContent = elem;
    ul_list.append(li_items);
  });

  img_one.src = "./images/header/logo.svg";
  img_two.src = "./images/header/BuhOne.svg";

  div_logo.append(img_one, img_two);
  navigation.append(div_logo, ul_list);
}

export { createNav };
