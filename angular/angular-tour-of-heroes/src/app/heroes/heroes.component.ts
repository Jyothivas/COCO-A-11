import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { catchError, Observable, map, of, tap  } from 'rxjs';
import { HeroDataService } from '../hero-data.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:any= [];
  
  

  constructor(private heroService: HeroDataService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      (`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  };



  // getHero(id: number) {
  //   return this.http.get<Hero>(`this.heroesUrl/${id}`).subscribe(hero=>this.hero=hero);   
  // }
}

