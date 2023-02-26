// const urlToPost = prompt("Give url to post")
// const imgUrl = prompt("Give url to img")

// const newImg = document.createElement("img")
// newImg.setAttribute("src", imgUrl)

// const a = document.createElement("a")
// newA.innerText = "Url to post"
// newA.setAttribute("href", urlToPost)

// const div = document.querySelector("div.main")
// div.append(newA, newImg)
// 

function beautyPrint(resalt) {
    console.log(`Значение c: ${result}`);

}

function beautyPrint1(result) {
    console.log(result);
}
function sum(a, b, p) {
    const c = a + b
    p(c) // result = c
    return c
}

const aValue = 1
const bValue = 3

sum(aValue, bValue, beautyPrint)