import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Film from '../model/Film';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  private url = 'http://127.0.0.1:3000';

  constructor(
    private http: HttpClient
    ) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.url)
  }

  searchFilms(q: string): Observable<Film[]> {
    return this.http.get<Film[]>(encodeURI(`${this.url}/search?q=${q}`))
  }
}

