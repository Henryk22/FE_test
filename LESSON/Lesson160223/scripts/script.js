// DOM = Document Object Model

// const pValue = document.querySelector("p")
// console.log(pValue.innerText)
// pValue.innerText = "Hello Word"
// console.log(pValue.innerHTML)

// const paragraphs = document.querySelectorAll("p")

// for (let index = 0; index < paragraphs.length; index++) {
//     const p = paragraphs[index]
//     console.log(p.innerText);
//   }
// const p = document.querySelector(".main .info_1")
// p.innerText = "Hello World!"

// const paragraphs = document.querySelectorAll(".info_1")
// const newArray = []

// for (let index = 0; index < paragraphs.length; index++) {
//   newArray.push(paragraphs[index].indexText)
//   }
//   console.log(newArray)

// const img = document.querySelector("img")
// console.log(img.src);
// console.log(img.alt);
// img.setAttribute("src",  "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%BF%D0%B0%D0%BD%D0%B4%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Panda_closeup.jpg")
// console.log(img.src);
// img.setAttribute("alt", "panda")
// img.setAttribute("data-content", "Hello Word!")

// const p = document.querySelector("p")
// p.setAttribute("data-content", "Hello Word!")

// const product = {
//   name: "Name"
// const imgs = document.querySelectorAll(".main img")

// for (let index = 0; index < 5; index++) {
//   imgs[index].setAttribute("src", "https://www.goodfon.ru/wallpaper/kartinka-3d-dikaya-koshka.html")
//   }

const paragraphsTexts = ["Day 1", "Day 2", "Day 3", "Day 4"]

const div = document.querySelector(".main")


for (let index = 0; index < paragraphsTexts.length; index++) {
  const p = document.createElement("p")
  p.innerText = paragraphsTexts[index]
  div.append(p)
  
}
// const p = document.createElement("p")
// p.innerText = "Hello World!"
// div.append(p)

