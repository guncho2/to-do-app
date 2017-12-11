function onReady() {//select Dom Elelments METHODS BETWEEN HTMLS AND JAVSCRIPT
  const addToDoForm = document.getElementById('addToDoForm');//<form id
     const newToDoText = document.getElementById('newToDoText');// <label for=
     //"newToDoText"><input type="text" id="newToDoText">
     const toDoList = document.getElementById('toDoList');//<ul id="toDoList">


     addToDoForm.addEventListener();
     // submit, for when the form is submitted. EVENT LISTENER=
     //<button type="submit">Add To-Do!</button>

     addToDoForm.addEventListener('submit', () => {
       // prevent the default form submission behavior from taking place
       //want the page to reload nor do we want to redirect the user to a new page.
       event.preventDefault();
//we get the text from the input and assign it to a variable, title
       // get the text

    let title = newToDoText.value;
    //Next we create the new to-do li and checkbox using
    //document.createElement(). Because a checkbox is nothing more than an input
    //element with a type attribute value of checkbox, we'll also set the type
    //property accordingly:
    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";
//The textContent property can read as well as write the content
//of an element.
    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    // attach the li to the ul
    toDoList.appendChild(newLi)
    //empty the input
    newToDoText.value = '';


 });
 }
 function removeAll(){
   deleteToDoForm.addEventListener();
   const deleteToDoForm = document.getElementById('deleteToDoForm');
    document.getElementById("deleteToDoForm").newToDoText.value =
     "";
}
//couldbe var garbage = deleteToDoForm.removeChild(value);

window.onload = function() {
  alert("The window has loaded!");
    onReady();
};
