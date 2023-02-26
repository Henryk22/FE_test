// function beautyPrint(resalt) {
//     console.log(`Значение c: ${result}`);

// }

// function beautyPrint1(result) {
//     console.log(result);

// const arr = [1, 2, 3, 4, 5]

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         //console.log(arr[i]);
//         callback(arr[i])
        
//     }
//     }

// function pow(a) {
//     console.log(a**2);
//     }
//     function cube(a) {
//         console.log(a**3);
        
//     }
// forEach(arr, pow)
// forEach(arr, cube)

// const prgph = document.querySelector("p")
// function clickHandler() {
//     console.log("Clicked");
    
// }
// prgph.addEventListener("click", clickHandler )

// const btnIncr = document.querySelector("#incr")
// const btnDecr = document.querySelector("#decr")
// const prgph = document.querySelector("p")
// let counter = 0
// function clickHandlerIncr() {
//     counter = counter + 1
//     prgph.innerText = counter
    
// }

// function clickHandlerdecr() {
//     counter = counter - 1
//     prgph.innerText = counter
//     // prgph.innerText = +prgph.innerText +1 //
// }

// btn.addEventListener("click", clickHandlerDecr)

// const prgph = document.querySelector("p")
// function clickHandler(event) {
// console.log(event);

//   prgph.innerText += event.key
//  }
// document.addEventListener("keydown", clickHandler)

const arr = ["Первый параграф", "Второй параграф", "Третий параграф"]
const div = document.querySelector("div.main")
for (let index = 0; index < arr.length; index++) {
    const newParagraph = document.createElement("p")
    newParagraph.innerText = arr[index]
    newParagraph.addEventListener("click", function () {
        newParagraph.innerText = "*****"
            })
    
}