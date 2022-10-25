import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TasksComponent} from 'src/app/components/tasks/tasks.component'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;

  @Output() someFunction = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.someFunction.emit({name : this.text,day : this.day});
  }
}
