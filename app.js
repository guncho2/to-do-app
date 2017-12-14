function onReady() {
//Add Initial State
//Use the  let keyword to declare a toDos variable,
// and assign it an empty array

  let id = 0;
  let toDos = [];
  //Get Elements from the DOM
  //form
  function deleteToDo(id){
	todos = todos.filter(todo => todo.id !== id);
}

  const addToDoForm = document.getElementById(addToDoForm);
  //input ID
  const newToDoText = document.getElementById(newToDoText);
  //Add createNewToDo() Function
    //will update our array of to-dos. We'll call createNewToDo()
    //with an event listener on our form.
  //add the new to-do to the toDos array using the push() method.
  // We'll use object literal notation to declare what we want
  //each to-do object to be Each to-do will be an object in the
  // toDos array, and each toDo object will have two properties:
  // title and complete.
    function createNewToDo{
  //We now have a functional to-do app, but it allows the user to
  // submit empty to-do items, which is potentially confusing.
  //Let's prevent that by executing a return if the value for
  //newToDoText is falsy.
      if (!newToDoText.value) {return;}

      toDos.push({
  //We assign the value of the text input, newToDoText,
  // to the title key. We create another key called
  // complete and initialize it to false.
        title: newToDoText.value,
        complete: false,
        id: id


  });
  id++;
  newToDoText.value = '';
  renderTheUI();
  }
  //ul ID
  const toDoList = document.getElementById(toDoList);



//Add the Event Listener to the Form
addToDoForm.addEventListener('submit'), event => {
  //prevent to reload
  event.preventDefault();
  //call the function
  createNewToDo();
  //clear text on input
  newToDoText.value = '';

}
//The last step is to call renderTheUI() each time the state changes.
// So far, the only time the state changes is when we add a new
//to-do using the createNewToDo() function, so we need to add
//renderTheUI() there.
///xxxxxx



  //we want to display the initial state, which will be an empty
  // text input and button.
  //renderTheUI() will take our current state (the toDos array)
  //and render the UI
  //forEach() takes a function as a parameter and executes that
  // function for each item in the array. Using forEach is how
  // we'll render each to-do as an li in the to-do list  ul.
  renderTheUI({
    const toDoList = document.getElementById(toDoList);
    const deleteToDoform = document.getElementById(deleteToDoform);
    const newLi = document.createElement('deleteToDoform');
    

    //before the forEach() function, we
    //need to set newLi to an empty string.
    toDoList.textContent = '';
    //each time we call the renderTheUI() function, it will add
    //new lis to the ul.
    toDos.forEach(function (toDo) {
      const deleteBtn = document.createElement('button');
deleteBtn.textContent = "Delete";

deleteBtn.addEventListener('click', e => {
	//pass id of todo
  //update view
  deleteToDo(toDo.id);
  renderTheUI();
                                         }
      //Create a new li element for the to-do.
      const newLi = document.createElement('li');
//Create an input element that has a type attribute of checkbox.
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

//Create a span element that's text content is the title of
//the to-do.
//Append the span and input to the li.
      const title = document.createElement('span');
      title.textContent = toDo.title;
// let's update the DOM

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);


    })
  })



}

window.onload = function() {
  alert("The window has loaded!");
    onReady();
};
