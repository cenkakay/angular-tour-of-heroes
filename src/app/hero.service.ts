import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetch heroes');
    return heroes;
  }
  getHero(id: number) {
    const hero = HEROES.find((h) => h.id === id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
