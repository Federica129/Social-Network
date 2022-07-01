import { DELETE, GET } from "./api.js";

const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const createCard = (parent, imgLink, title, price) => {
  const wrapperEl = c("div");
  const titleEl = c("h3");
  const priceEl = c("p");
  const imgEl = c("img");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  priceEl.className = "price";
  imgEl.className = "img";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  priceEl.textContent = price;

  wrapperEl.append(imgEl, titleEl, priceEl);
  parent.appendChild(wrapperEl);
};

const createFriendEl = (parent, name, photo) => {
  const wrapper = c("div");
  const img = c("img");
  const par = c("p");

  wrapper.className = "friendCard";
  img.setAttribute("alt", name);
  img.setAttribute("src", photo);
  par.textContent = name;

  wrapper.append(img, par);
  parent.appendChild(wrapper);
};

const createMessageEl = (parent, text, sender, date, id) => {
  const wrapper = c("div");
  const textPar = c("p");
  const senderPar = c("p");
  const dataPar = c("p");

  wrapper.className = "messageCard";
  wrapper.setAttribute("id", id);
  textPar.textContent = text;
  senderPar.textContent = sender;
  dataPar.textContent = date.split("T")[0].split("-").reverse().join("-");
  //dataPar.textContent = date;

  wrapper.addEventListener("click", () => {
    DELETE("https://edgemony-backend.herokuapp.com/messages/", id).then(
      () => wrapper.remove(id)

      //location.reload() carica tutta la pag. con wrapper.remove no
    );
  });
  wrapper.append(textPar, senderPar, dataPar);
  parent.appendChild(wrapper);
};

const createSponsorEl = (parent, title, image) => {
  const boxSpon = c("div");
  const titlePar = c("p");
  const imgSpon = c("img");

  boxSpon.className = "sponsor3";
  titlePar.textContent = title;
  imgSpon.setAttribute("alt", "Sponsor");
  imgSpon.setAttribute("src", image);

  boxSpon.append(imgSpon, titlePar);
  parent.appendChild(boxSpon);
};
export { c, q, createCard, createFriendEl, createMessageEl, createSponsorEl };
