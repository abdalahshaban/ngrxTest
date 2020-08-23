import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { StoreInterface } from './store/store';
import { IncreamentAction, DecreamentAction } from './store/actions/counter.action';
import { nSelector } from './store/reducers/counter.reducer';
import { LoadTodoAction } from './store/actions/todo.action';
import { todosSelector } from './store/reducers/todos.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'ngrxapp';

  count: number = 0;

  constructor(private store: Store<StoreInterface>) {
    this.store.select(nSelector).subscribe(data => {
      console.log(data, 'counter');
      this.count = data
    })

    this.store.select(todosSelector).subscribe(data => {
      console.log(data, 'todo');
    })
  }

  increase() {
    this.store.dispatch(new IncreamentAction(2))
  }
  decrease() {
    this.store.dispatch(new DecreamentAction(2))
  }


  load() {
    this.store.dispatch(new LoadTodoAction())
  }

}
