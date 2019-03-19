import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: hero[];

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }


  getHeroes() {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}