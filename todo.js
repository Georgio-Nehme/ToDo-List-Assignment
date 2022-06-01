class todo {
    constructor(id,title,content,importance,is_done) {
      this.id = id 
      this.title = title;
      this.content= content;
      this.importance=importance;
      this.is_done= is_done;
    }
}

var todo1 = new todo(1,"maintenance","go to the mechanical check",5,false);



var todo_list = [];
let todoList = todo_list;

localStorage.setItem(todoList, todo_list);


todo_list.push(todo1);


console.log(todoList[0]);