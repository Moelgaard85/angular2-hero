import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-hero';

@Injectable()
export class HeroService {

  constructor() { }

  // Normal promise call (but immediatly)
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // Simulate 2 second server response
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }



}
