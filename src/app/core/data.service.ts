import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:8080/greeting";

  constructor(private http: HttpClient) { }

  public getPosts(){
    return this.http.get(this.url);
  }
}