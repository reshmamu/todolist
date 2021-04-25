import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';
  nextId = 4;
  todos = [
    {
      id: 1,
      label: 'apple',
      done: false
    },
    {
      id: 2,
      label: 'orange',
      done: false
    },
    {
      id: 3,
      label: 'grape',
      done: true
    },
  ];

  delete(todo:any) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  add(newTodoLabel:any) {
    let newTodo = {
      id: this.nextId,
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
    this.nextId++;
  }

  toggle(todo:any) {
    todo.done = !todo.done;
  }
}

