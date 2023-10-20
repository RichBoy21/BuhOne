import { navigation, presentation, section_one } from "./variables.js";
import { arr_nav, arr_presentation } from "./utils.js";
import { cards_one } from "./cards.js";

const frame = document.createElement("div");
const cards = document.createElement("div");
const triggers = document.createElement("div");
const buttons = document.createElement("div");
buttons.classList.add("btn_box");

const left_btn = document.createElement("button");
const right_btn = document.createElement("button");

let slider_index = 0;

left_btn.innerText = "<";
right_btn.innerText = ">";
left_btn.classList.add("left_right_btn");
right_btn.classList.add("left_right_btn");

triggers.classList.add("trigger");
frame.classList.add("frame");
cards.classList.add("cards");

buttons.append(left_btn, right_btn);
triggers.append(buttons);
frame.append(cards);
presentation.append(frame, triggers);

function createSectionOne() {
  const section_container = document.createElement("div");
  const section_p = document.createElement("p");
  const section_h2 = document.createElement("h2");
  const container_cards = document.createElement("div");

  section_p.innerText = "Наши услуги";
  section_h2.innerText = "Мы специализируемся";

  section_container.classList.add("one_container");
  section_p.classList.add("one_paragraph");
  section_h2.classList.add("one_title");
  container_cards.classList.add("container_cards");

  cards_one.forEach((card) => {
    const cards_div = document.createElement("div");
    const backround = document.createElement("div");
    cards_div.classList.add("card_item");
    backround.classList.add("backround");

    cards_div.style.backgroundImage = `url(${card.img})`;
    cards_div.innerHTML = `<p>${card.text}</p>`;

    cards_div.append(backround);
    container_cards.append(cards_div);
  });

  section_container.append(section_p, section_h2, container_cards);
  section_one.append(section_container);
}

function createPresentation() {
  arr_presentation.forEach((objInfo) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h1>${objInfo.title}</h1>
                    <p>${objInfo.paragraph}</p>`;
    cards.append(card);
  });
  buttonsRightLeft(arr_presentation);
  create_round(arr_presentation);
}

function buttonsRightLeft(array) {
  left_btn.addEventListener("click", go_left);
  right_btn.addEventListener("click", go_right);

  function go_left() {
    if (slider_index !== 0) {
      slider_index--;
      cards.style.left = `${-1 * slider_index * 500}px`;
    }
  }
  function go_right() {
    if (slider_index < array.length - 1) {
      slider_index++;
      cards.style.left = `${-1 * slider_index * 500}px`;
    }
  }
}

function create_round(array) {
  const container = document.createElement("div");
  container.classList.add("rounds");

  array.forEach((_, ind) => {
    const button = document.createElement("button");
    button.classList.add("slider_btn");
    container.append(button);

    button.addEventListener("click", () => {
      slider_index = ind;
      cards.style.left = `${-1 * slider_index * 500}px`;

      const all_button = button.parentElement.children;

      Array.from(all_button).forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });
  triggers.prepend(container);
}

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

export { createNav, createPresentation, createSectionOne };
