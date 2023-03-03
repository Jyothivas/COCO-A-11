import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroDataService {
  heroesUrl = 'http://localhost:8282';
  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<Hero[]>(this.heroesUrl);
  };

  getHero(id: Number): Observable<Hero[]> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero[]>(url);
  }


  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero);
  }


  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url);
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.heroesUrl}/${hero.id}`, hero);
  }

}
