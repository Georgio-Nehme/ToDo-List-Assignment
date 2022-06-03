
//DOM//
var completed = $("#completed_tasks");
var title_input = $("#title");
var importance_input = $("#importance_input");
var todo_input = $("#todo_content");
const add_button = $("#add_button");


class Todo {
  constructor(id,title,content,importance,is_done) {
    this.id = id 
    this.title = title;
    this.content= content;
    this.importance=importance;
    this.is_done= is_done;
  }

  setId(new_id){
    this.id = new_id;
  }
  setTitle(new_title){
    this.title=new_title;
  }
  setContent(new_content){
    this.content=new_content;
  }
  setImportance(new_importance){
    this.importance=new_importance;
  }
  done(){
    this.is_done=true;
  }


  getId(){
    return this.id;
  }
  getTitle(){
    return this.title;
  }
  getImportance(){
    return this.importance;
  }
}


// var todo1 = new Todo(1,"maintenance","go to the mechanical check",1,false);


// todo1.setTitle("Go Home");
// todo1.setContent("DriveDriveDriveDrive");
// todo1.setImportance(5);
// todo1.done();
// console.log(todo1)

$("#add_button").click(function() {
  let todo = new Todo(-1," "," "," ",false);
  todo.setTitle(title_input.val());
  todo.setContent(todo_input.val());
  todo.setImportance(importance_input.val());

  console.log(todo.getImportance);
});








// var todo_list = [];

// add_buuton.addEventListener("click",function(id, title, content, importance, is_done){

// var todo = new todo(todo_list.length + 1, title_input.val(),todo_input.val(),importance_input.val(),false);


// todo_list.push(Todo);

// })



//On click events //
//listing the todos//
// window.onload = function listTodos(){
//   for(i = 0 ; i <localStorage.getItem(ToDoList).length;i++){
//     let todo = localStorage.getItem(ToDoList)[i];
//     let title = todo[title];
//     let importance = todo[importance];
//     let content = todo[content];
//     let is_done = todo[is_done]
//   }
// }

// console.log(todo)

 ////////////
//Functions//
////////////

// 
// var todo2 = new todo(2,"maintenance","go to the mechanical check",3,false);
// var todo3 = new todo(3,"go to haven","gogogogogogogogogogogogogo",2,false);

// var todo_list = [];

// todo_list.push(todo1);
// todo_list.push(todo2);
// todo_list.push(todo3);

// localStorage.setItem("ToDoList" ,todo_list);

// var ToDoList = localStorage.getItem("ToDoList");

// function listTodos () {
//   for( let i = 0; i< length())
// };


// function myFunction() {
//   var table = document.getElementById("list_of_Todo");
//   var row = table.insertRow(0);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   cell1.innerHTML = "NEW CELL1";
//   cell2.innerHTML = "NEW CELL2";
// }