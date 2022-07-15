import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from "../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  async ngOnInit(): Promise<void> {
    const res = await this.taskService.getTasks(1, 10, "", "add-date-desc", "", 0);
    res.subscribe((tasks) => {
      tasks.forEach(task => {
        if (task.dateCreated) task.dateCreated = new Date(task.dateCreated);
      });
      this.tasks = tasks;
    });
  }

}
