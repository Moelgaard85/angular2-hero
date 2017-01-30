import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes/hero';
import { HeroService } from './heroes/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  title = 'Tour of Heroes';
  heroes: Hero[] = [];
  selectedHero: Hero;

  // Click on hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly()
    .then(result => this.heroes = result)

    // this.heroService.getHeroes()
    // .then(result => this.heroes = result);
  }

}
