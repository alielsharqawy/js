let names = ["ali", "ahmed", "gamal", "mohamed"];
let ages = ["18 Years old", "19 Years old", "20 Years old", "21 Years old"];

//container يمثل الصفحة
let container = document.createElement("div");
document.body.appendChild(container);

// function for the card
function element(name = "ali", ages = "22 years old") {
  // elements (card ant it is elements(h2,p,img))
  let card = document.createElement("div");
  let title = document.createElement("H2");
  let age = document.createElement("p");
  let img = document.createElement("img");

  // content
  let head = document.createTextNode(name);
  let ageContent = document.createTextNode(ages);
  img.src = "ph.JPG";

  // add content
  title.appendChild(head);
  age.appendChild(ageContent);
  // append content in card
  card.appendChild(title);
  card.appendChild(age);
  card.appendChild(img);
  // append card in the container
  container.appendChild(card);

  // card style
  card.style.backgroundColor = "#444";
  card.style.width = "200px";
  card.style.display = "inline-block";
  card.style.padding = "15px";
  card.style.textAlign = "center";
  card.style.borderRadius = "10px";
  card.style.color = "#fff";
  card.style.margin = "2px";

  // img style
  img.style.width = "100%";

  // title style
  title.style.margin = "2px";
}
let i;
for (i = 0; i < 50; i++) {
  element(names[i], ages[i]);
}
