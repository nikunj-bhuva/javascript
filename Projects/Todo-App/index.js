// let userValue = document.querySelector("#userValue");
// console.log(userValue);

// let addtodo = document.querySelector("#addtodo");
// console.log(addtodo);

// let todolists = document.querySelector(".todolists");
// console.log(todolists);

// let getData = [];

// addtodo.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (userValue.value === "") {
//     alert("please enter your Value");
//   } else {
//     let inputValue = userValue.value.trim();
//     let createMainDiv = document.createElement("div");
//     createMainDiv.classList.add("main-todolist");
//     createMainDiv.innerHTML = `<li>${inputValue}</li><button class="deletebtn">Delete</button>`;
//     console.log(createMainDiv);
//     todolists.append(createMainDiv);
//     getData.push(inputValue);
//     localStorage.setItem("todolists", getData);
//     userValue.value = "";

//     // this is my code //

//     // let createLi = document.createElement("li");
//     // createLi.innerText = userValue.value;
//     // console.log(createLi);
//     // createMainDiv.append(createLi);
//     // let createDelete = document.createElement("button");
//     // createDelete.innerText = "Delete";
//     // console.log(createDelete);
//     // createMainDiv.append(createDelete);
//   }
// });

// let userValue = document.querySelector("#userValue");
// let addTodoBtn = document.querySelector("#addtodo");

// let arr = [];
// addTodoBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(arr);
//   let inputValue = userValue.value.trim();
//   if (inputValue === "") {
//     alert("please enter your Value!");
//   } else {
//     let createDiv = document.createElement("div");
//     createDiv.classList.add("main-todolist");
//     createDiv.innerHTML = `<li>${inputValue}</li> <button class="deletebtn">Delete</button>`;
//     let todoLists = document.querySelector(".todolists");
//     todoLists.append(createDiv);
//     console.log(arr.push(inputValue));
//     console.log("after push", arr);
//     localStorage.setItem("todolistdetail", arr);
//   }
// });

let userValue = document.querySelector("#userValue");

let addtodoBtn = document.querySelector("#addtodo");

let getData = JSON.parse(localStorage.getItem("todolists")) || [];

let todoLists = document.querySelector(".todolists");

let createDiv;
let createLi;
let createDelete;
getData.forEach((element) => {
  createDiv = document.createElement("div");
  createLi = document.createElement("li");
  createDelete = document.createElement("button");
  createDelete.classList.add("deletebtn");
  createDiv.classList.add("main-todolist");
  createLi.innerText = element;
  createDelete.innerText = "delete";
  createDiv.append(createLi);
  createDiv.append(createDelete);
  todoLists.append(createDiv);
});

addtodoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = userValue.value.trim();
  if (inputValue === "") {
    alert("please enter your value");
  } else {
    console.log(inputValue);
    getData.push(inputValue);
    localStorage.setItem("todolists", JSON.stringify(getData));
    let createDiv = document.createElement("div");
    createDiv.classList.add("main-todolist");
    createDiv.innerHTML = `<li>${inputValue}</li> <button class="deletebtn">Delete</button>`;
    let todoLists = document.querySelector(".todolists");
    console.log(todoLists);
    todoLists.append(createDiv);
  }
});

let deleteBtns = document.querySelectorAll(".deletebtn");

deleteBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Remove the corresponding todo item from getData array
    getData.splice(index, 1);

    // Update localStorage with the modified getData array
    localStorage.setItem("todolists", JSON.stringify(getData));

    // Remove the todo item from the UI
    btn.parentElement.remove();
  });
});

function myfun(ele, idx, arr) {
  
}
