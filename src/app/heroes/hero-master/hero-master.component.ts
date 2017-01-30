import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-master',
  templateUrl: './hero-master.component.html',
  styleUrls: ['./hero-master.component.css'],
})
export class HeroMasterComponent implements OnInit {
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
