import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from "../Task";


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  constructor(private http: HttpClient) { }

  async getTasks(page: number = 1, limit: number = 10,
    category: string = "", order: string = "add-date-desc",
    searchText: string = "", isCompleted: number = 2): Promise<Observable<Task[]>> {
    const response: any = await firstValueFrom(this.http.get(
      `http://localhost:2000/api/v1/task?p=${page}&l=${limit}` +
      `&c=${category}&o=${order}&st=${searchText}&ic=${isCompleted}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        withCredentials: true
      }
    ));
    return of(<Task[]>response.records);
  }
}
