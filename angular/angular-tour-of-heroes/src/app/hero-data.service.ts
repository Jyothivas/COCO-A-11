import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroDataService {
  heroesUrl = 'http://localhost:8282';
  constructor(private http: HttpClient) {

  }

  getHeroes() {
    return this.http.get<Hero>(this.heroesUrl);
  };

  getHero(id: Number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  /** Log a HeroService message with the MessageService */
  //  private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
