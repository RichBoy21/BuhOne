import {
  navigation,
  presentation,
  section_one,
  section_two,
  section_three,
  section_four,
  footer_container,
} from "./variables.js";
import {
  arr_nav,
  arr_presentation,
  arr_section_three,
  arr_section_four,
  footer_info,
} from "./utils.js";
import { cards_one, cards_two } from "./cards.js";

const cards = document.createElement("div");
const triggers = document.createElement("div");

let slider_index = 0;

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
function createSectionTwo() {
  const section_container_two = document.createElement("div");
  const section_content = document.createElement("div");
  const section_cards = document.createElement("div");
  const section_h3 = document.createElement("h3");
  const section_img = document.createElement("img");
  const section_p = document.createElement("p");

  section_container_two.classList.add("container_two");
  section_content.classList.add("content");
  section_cards.classList.add("cards");

  section_h3.innerText = "О нас";
  section_img.src = "../images/section_two/Компания ИвановПром.svg";
  section_p.innerText =
    "Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной  для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.";

  cards_two.forEach((card) => {
    const cards_item_two = document.createElement("div");
    const backround_two = document.createElement("div");
    cards_item_two.classList.add("card_item");
    backround_two.classList.add("backround");

    backround_two.style.background = "#005FA3";
    cards_item_two.innerHTML = `<p class="text_one">${card.number}</p>
                                <p class="text_two">${card.title}</p>
                                <p class="text_three">${card.text}</p>`;

    cards_item_two.append(backround_two);
    section_cards.append(cards_item_two);
  });

  section_content.append(section_h3, section_img, section_p);
  section_container_two.append(section_content, section_cards);
  section_two.append(section_container_two);
}

function createSectionThree() {
  const section_container_three = document.createElement("div");
  const section_container_frame = document.createElement("div");
  const section_container_content = document.createElement("div");
  const section_container_btns = document.createElement("div");

  const section_h2_three = document.createElement("h2");
  const section_p_three = document.createElement("p");

  section_container_three.classList.add("container");
  section_container_content.classList.add("content");
  section_container_btns.classList.add("btns");
  section_container_frame.classList.add("frame");

  section_h2_three.innerText = "Наши клиенты";
  section_p_three.innerText = "С нами работают";

  arr_section_three.forEach((image) => {
    const img_cards = document.createElement("div");
    img_cards.classList.add("cards_img");
    img_cards.innerHTML = `<img src="${image.img}" alt="">
                            <img src="${image.img1}" alt="">
                            <img src="${image.img2}" alt="">
                            <img src="${image.img3}" alt="">`;
    section_container_content.append(img_cards);
  });

  section_container_frame.append(section_container_content);
  section_container_three.append(
    section_h2_three,
    section_p_three,
    section_container_frame,
    section_container_btns
  );
  section_three.append(section_container_three);

  createButtons(
    arr_section_three,
    section_container_btns,
    section_container_content
  );
  create_round(
    arr_section_three,
    section_container_btns,
    section_container_content
  );
}

function createSectionFour() {
  const section_container_four = document.createElement("div");
  const section_h2_three = document.createElement("h2");
  const section_p_three = document.createElement("p");

  const section_container_frame = document.createElement("div");
  const section_container_content = document.createElement("div");
  const section_container_btns = document.createElement("div");

  section_container_four.classList.add("container_four");
  section_container_content.classList.add("content");
  section_container_btns.classList.add("btns");
  section_container_frame.classList.add("frame");
  section_p_three.classList.add("text_content");

  section_h2_three.innerText = "Отзывы";
  section_p_three.innerText = "Ваши благодарности";

  arr_section_four.forEach((item) => {
    const item_cards = document.createElement("div");
    item_cards.classList.add("cards_item");
    item_cards.innerHTML = `<p class="content_p">${item.content}</p>
                          <div class="info">
                              <img src="${item.img}" alt="">
                            <div class="contact">
                              <p class="name">${item.name}</p>
                              <p class="firma">${item.firma}</p>
                            </div>
                          </div>`;
    section_container_content.append(item_cards);
  });

  section_container_frame.append(section_container_content);
  section_container_four.append(
    section_h2_three,
    section_p_three,
    section_container_frame,
    section_container_btns
  );
  section_four.append(section_container_four);

  createButtons(
    arr_section_four,
    section_container_btns,
    section_container_content
  );
  create_round(
    arr_section_four,
    section_container_btns,
    section_container_content
  );
}

function createPresentation() {
  arr_presentation.forEach((objInfo) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h1>${objInfo.title}</h1>
                    <p>${objInfo.paragraph}</p>`;
    cards.append(card);
  });
  buttonsRightLeft(arr_presentation, presentation, cards);
  create_round_header(arr_presentation, triggers, cards);
}

function createButtons(array, parents_element, card) {
  const btns_container = document.createElement("div");

  const left_btn_one = document.createElement("button");
  const right_btn_two = document.createElement("button");

  left_btn_one.innerText = "<";
  right_btn_two.innerText = ">";
  left_btn_one.classList.add("left_right_btn");
  right_btn_two.classList.add("left_right_btn");

  btns_container.append(left_btn_one, right_btn_two);
  parents_element.append(btns_container);

  function go_left() {
    if (slider_index !== 0) {
      slider_index--;
      card.style.left = `${-1 * slider_index * 1090}px`;
    }
  }

  function go_right() {
    if (slider_index < array.length - 1) {
      slider_index++;
      card.style.left = `${-1 * slider_index * 1090}px`;
    }
  }

  left_btn_one.addEventListener("click", go_left);
  right_btn_two.addEventListener("click", go_right);
}

function buttonsRightLeft(array, parentElement, cards) {
  const frame = document.createElement("div");

  const buttons = document.createElement("div");

  buttons.classList.add("btn_box");

  const left_btn = document.createElement("button");
  const right_btn = document.createElement("button");

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
  parentElement.append(frame, triggers);

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

function create_round_header(array, parent_element, cards) {
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
  parent_element.prepend(container);
}

function create_round(array, parent_element, cards) {
  const container = document.createElement("div");
  container.classList.add("rounds");

  array.forEach((_, ind) => {
    const button = document.createElement("button");
    button.classList.add("slider_btn");
    container.append(button);

    button.addEventListener("click", () => {
      slider_index = ind;
      cards.style.left = `${-1 * slider_index * 1090}px`;

      const all_button = button.parentElement.children;

      Array.from(all_button).forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });
  parent_element.prepend(container);
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

function createFooter() {
  const footer_contacts = document.createElement("div");
  footer_contacts.classList.add("footer_contacts");

  const footer_contacts_box = document.createElement("div");
  footer_contacts_box.classList.add("footer_contacts_box");

  const footer_box_left = createFooterTextInfo();
  const footer_box_right = createFooterInputs();

  footer_contacts_box.append(footer_box_left, footer_box_right);
  footer_contacts.append(footer_contacts_box);
  footer_container.append(footer_contacts, createFooterPolicy());
}

function createFooterTextInfo() {
  const footer_box_left = document.createElement("div");
  footer_box_left.classList.add("footer_box_left");

  const footer_title = document.createElement("h2");
  footer_title.classList.add("footer_title");

  const footer_text = document.createElement("p");
  footer_text.classList.add("footer_text");

  const footer_info_box = createFooterInfoBox();

  footer_title.innerText = "Связь с нами";
  footer_text.innerText =
    "У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!";

  footer_box_left.append(footer_title, footer_text, footer_info_box);
  return footer_box_left;
}

function createFooterInfoBox() {
  const footer_info_box = document.createElement("div");
  footer_info_box.classList.add("footer_info_box");

  footer_info.forEach((el) => {
    const footer_info_container = document.createElement("div");
    footer_info_container.classList.add("footer_info_container");
    footer_info_container.innerHTML = `<img src="${el.logo}">
                                        <p class="info_p">${el.content}</p>`;
    footer_info_box.append(footer_info_container);
  });
  return footer_info_box;
}

function createFooterInputs() {
  const footer_box_right = document.createElement("div");
  footer_box_right.classList.add("footer_box_right");

  const inputs_container = document.createElement("div");
  inputs_container.classList.add("inputs_container");

  const input_name = document.createElement("input");
  input_name.classList.add("input_name");

  const input_lastname = document.createElement("input");
  input_name.classList.add("input_lastname");

  const input_message = document.createElement("input");
  input_name.classList.add("input_massage");

  const label_name = document.createElement("label");
  input_name.classList.add("label_name");

  const label_lastname = document.createElement("label");
  input_name.classList.add("label_lastname");

  const label_message = document.createElement("label");
  input_name.classList.add("label_message");

  const btn = createButton();

  label_name.innerHTML = "Имя<br>";
  label_lastname.innerHTML = "Фамилия<br>";
  label_message.innerHTML = "Сообщение<br>";

  input_name.setAttribute("placeholder", "Иван");
  input_lastname.setAttribute("placeholder", "Иванов");
  input_message.setAttribute("placeholder", "Ваше сообщение");

  label_name.append(input_name);
  label_lastname.append(input_lastname);
  label_message.append(input_message);
  inputs_container.append(label_name, label_lastname);
  footer_box_right.append(inputs_container, label_message, btn);
  return footer_box_right;
}

function createButton() {
  const btn = document.createElement("button");
  btn.innerText = "Отправить сообщение";
  return btn;
}

function createFooterPolicy() {
  const footer_policy = document.createElement("div");
  footer_policy.classList.add("footer_policy");

  const policy_text_one = document.createElement("p");
  policy_text_one.classList.add("policy_text");

  const policy_text_two = document.createElement("p");
  policy_text_two.classList.add("policy_text");

  policy_text_one.innerText = "2019 (с) Все права защищены. БухОне.ру";
  policy_text_two.innerText = "Разработано: BuhOne";
  footer_policy.append(policy_text_one, policy_text_two);
  return footer_policy;
}

export {
  createNav,
  createPresentation,
  createSectionOne,
  createSectionTwo,
  createSectionThree,
  createSectionFour,
  createFooter,
};
