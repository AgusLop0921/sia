import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Service {
  private apiUrl = "http://localhost:4200/"
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  public checkMushroom(body) {
    return this.http.post<any>(`${this.apiUrl}api/analyze_mushroom/`, body, this.httpOptions);
  }
}
