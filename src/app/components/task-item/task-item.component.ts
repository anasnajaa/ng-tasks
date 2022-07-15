import { Component, OnInit, Input } from '@angular/core';
import { Task } from "../../Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { firstValueFrom, Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  async markCompleted(): Promise<void> {
    console.log(this.task);

    this.task.isCompleted = true;

    const response: any = await firstValueFrom(this.http.put(
      `http://localhost:2000/api/v1/task/${this.task._id}/toggle`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      body: JSON.stringify({
        isCompleted: this.task.isCompleted ? false : true
      })
    }
    ));
  }

}
