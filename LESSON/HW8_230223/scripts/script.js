//  Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
const divNumbers = document.querySelector("div")
for(i=100; i>=50; i-=10){
    const parag = document.createElement("p")
    parag.innerText = i
    divNumbers.append(parag)
}

//  Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные.
const divStrCont = document.querySelector(".stringscontainer")
const arr = ["Yamaha", "BMW", "Kawasaki", "KTM", "Ducati"]
for(i=0; i<arr.length; i++){
    const paragraph = document.createElement("p")
    paragraph.innerText = arr[i] 
    divStrCont.append(paragraph)
}

//  Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer.

// Создаем массив пользователей
const users = [
    { firstname: "Radjiv", lastname: "Wishnu", age: 25 },
    { firstname: "Ronald", lastname: "Reigan", age: 17 },
    { firstname: "Alfie", lastname: "Johnson", age: 20 },
    { firstname: "Jacob", lastname: "Williams", age: 14 },
    { firstname: "Thomas", lastname: "Black", age: 30 }
  ];
  
  // Получаем элемент div с классом "userscontainer"
  const usersContainer = document.querySelector(".userscontainer");
  
  // Проходимся по массиву пользователей и создаем карточки только для совершеннолетних пользователей
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    
    if (user.age >= 18) {
      const card = document.createElement("div");
      card.classList.add("usercard");
      card.innerHTML = `
        <h2>${user.firstname} ${user.lastname}</h2>
        <p>Age: ${user.age}</p>`;
      usersContainer.appendChild(card);
    }
  }