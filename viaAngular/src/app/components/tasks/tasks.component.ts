import { Component, OnInit, Input} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  faTimes = faTimes
  // tasks: [] = TASKS;
    tasks = [
    {
      id: 1,
      name: 'Doctors Appointment',
      day: 'May 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      name: 'Meeting at School',
      day: 'May 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      name: 'Food Shopping',
      day: 'May 7th at 12:30pm',
      reminder: false,
    }
]
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(id:number){
    this.tasks = this.tasks.filter(task => id !== task.id)
  }
  onSubmity(data:any){
   const obj1 = {id: (this.tasks.length+1),name : data.name,day: data.day,reminder: false};
   this.tasks.push(obj1)
  }
}
