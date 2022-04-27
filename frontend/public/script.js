// const firstPerson = {
//   name: "Peter",
//   sex: "male",
// };

// const secondPerson = {
//   name: "Sarah",
//   sex: "female",
// };

// function detectSex(person) {
//   console.log(person);
//   if (person.sex === "female") {
//     return "this person is a female";
//   } else if (person.sex === "male") {
//     return "this person is a male";
//   } else {
//     return "the person's sex is not female or male";
//   }
// }

// console.log(detectSex(firstPerson));

// console.log(detectSex(secondPerson));

// console.log(
//   detectSex({
//     name: "Penelopé",
//     sex: "female2",
//   })
// );

const beerCardComponent = function (name, company, type) {
  //csak akkor lehet belerakni értéket ha fgv, sima stringként nem
  //a fgv paraméternek bármilyen szót megadhatunk, csak utána a fgv-en belül is azt kell majd használni
  return `
  <div class="card">
    <div class="beer-name">${name}</div>
    <div class="beer-company">${company}</div>
    <div class="beer-type">${type}</div>
    <br>
  </div>
  `;
};

const loadEvent = function () {
  const rootElement = document.getElementById("root");

  //ha van adat akkor for of loop, ha csak számok vannak akkor sima for loop!!
  //az iterátor(első elem a for loopban) bármi lehet, csak később azt kell használni a loopban
  //az object(második elem) pedig az objektum, amire hivatkozunk(itt a beers variable-n belül a cards array)
  for (const beer of beers.cards) {
    //az insertAdjacentHTML 2. eleme egy olyan string, amit html dokumentummá tud alakítani
    rootElement.insertAdjacentHTML(
      "beforeend",
      beerCardComponent(beer.title, beer.sub, beer.text)
    );
  }
};
//a window egy globális objektum és ez jön be először, mikor megnyitjuk az oldalt
//az addEventListener-el tudunk hozzáférni a dokumentumhoz(!fontos)
window.addEventListener("load", loadEvent);
