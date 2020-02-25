import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: []
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroService: HeroesService,

    private router: Router) {

     }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = (params['termino']);
      this.heroes = this._heroService.buscarHeroes( params ['termino']);
      console.log(this.heroes);
    });
  }

  
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
