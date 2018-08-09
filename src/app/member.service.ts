import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mem } from './mem';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  url: string = '';
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    })
  };
  public get httpOptions() {
    return this._httpOptions;
  }
  public set httpOptions(value) {
    this._httpOptions = value;
  }
  constructor(private http: HttpClient) {
    this.url = 'https://nafsar.github.io/demo/students.json';
  }

  getValues(): Observable<Mem[]> {
    console.log("name= " + JSON.stringify(this.http.get<Mem[]>(this.url, this._httpOptions)));
    return this.http.get<Mem[]>(this.url, this._httpOptions);
  }
}
