import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDataService } from '../hero-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes:any= [];

  constructor(private heroService: HeroDataService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroe => this.heroes = heroe);
  }
}