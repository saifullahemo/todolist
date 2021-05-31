// gettting all required elements

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");


inputBox.onkeyup = () =>{
    let userData = inputBox.value; //getting user entered value
    if(userData.trim() != 0){ //if user values ain't only spaces
        addBtn.classList.add("active") //active the add button
    }else{
        addBtn.classList.remove("active"); //inactive the add button
    }
}
showTasks(); //calling showtasks funtion

// if user click on the add button
addBtn.onclick = () => {
    let userData = inputBox.value; //getting user entered data
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){ //if localStorage in null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into js object 
    }
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
    console.log(JSON.parse(getLocalStorage));
    showTasks(); //calling showtasks funtion
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){ //if local storage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into js object
    }

     const pendingTasks = document.querySelector(".pendingTasks");
     pendingTasks.textContent = listArr.length; //passing the length value in pending

     if(listArr.length > 0){ //if array length is greater than 0
         deleteAllBtn.classList.add("active"); //active the clear button
        }else {
         deleteAllBtn.classList.remove("active"); //inactive the clear button

     }

    let newLiTag = '';
 
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element} <span onclick="deleteTask(${index})"; > <i class = "fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //adding li tag inside ul tag
    console.log(showTasks); 
    inputBox.value = ""; //once task created leave the input field blank
}

//delete task function



// delete all tasks function
deleteAllBtn.onclick = () => {
    listArr = []; //empty an array
    // after delete all task again update the local storage

    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks();

}