// const div = document.querySelector("div")
// // console.log(div.classList);
// // div.classList.add("root") //добавляет новый класс
// // div.classList.add("main") //если есть то не добавляет
// // console.log(div.classList);

// div.classList.add("box", "green", "black")

// // div.classList.remove("root") //удаляет класс

// // div.classList.togle("main") //если нет класса с таким названием то добавляет а если есть то удаляет

// div.classList.replace("main", "container")  //заменяет указанный класс на другой

// const div = document.querySelector("div")
// const button = document.querySelector("#toggleColor")

// button.addEventListener("ckick", function () {
//     div.classList.remove("active")
    
// })
// const button = document.querySelector("#addColor")
// const removeButton = document.querySelector("#removeColor")

// button.addEventListener("click", function () {
//     div.classList.add("green")
    
// })

// removeButton.addEventListener("click", function () {
//     div.classList.remove("green")
// })



// const cards = document.querySelectorAll(".card")
// for (let index = 0; index < cards.length; index++) {
//     const card = cards[index];

//     card.addEventListener("click", function () {
//         card.classList.toggle("active")
        
//     })
    
// }
// const cards = document.querySelectorAll("#cards")
// for (let index = 0; index < 10; index++) {

//     const cardDiv = document.createElement("div")
//     cardDiv.innerText = index
//     cardDiv.classList.add("card")
//     cardDiv.addEventListener("click", function () {
//         cardDiv.classList.toggle("active")
        
//     })
//     cards.append(cardDiv)
    
// }
let words = [
{en: "cat", ru: "кошка"},
{en: "dog", ru: "собака"},
{en: "bird", ru: "птица"},
{en: "tree", ru: "дерево"},
{en: "flower", ru: "цветок"}

]

let cards = document.querySelector("#cards")
const ruBtn = document.querySelector("btnRu")
const enBtn = document.querySelector("btnEn")

for (let index = 0; index < words.length; index++) {
    const {en, ru} = words[index]

    const russian = document.createElement("p")
    russian.innerText = ru

    const english = document.createElement("p")
    english.innerText = en
    english.classList.add("hidden", "en")

    const card = document.createElement("div")
    card.classList.add("card")
    card.append (russian, english)

    card.addEventListener("click", function () {
 russian.classList.toggle("hidden")
 english.classList.toggle("hidden")
    })

    
    cards.append(card)
}

const ruParagrapfs = document.querySelectorAll(".ru")
    const enParagrapfs = document.querySelectorAll(".en")

    ruBtn