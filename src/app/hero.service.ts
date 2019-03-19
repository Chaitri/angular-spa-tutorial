import { Injectable } from '@angular/core';
import { hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeroes():Observable<hero[]> {
    this.messageService.add("HeroService : fetched heroes")
    return of(HEROES);
  }

  getHero(id:number):Observable<hero> {
    this.messageService.add(`HeroService: fetched hero of id = ${id}`)
    return of(HEROES.find(hero => hero.id === id))
  }

}