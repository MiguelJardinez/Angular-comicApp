import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './navbar.component.html'
})

export class HeaderComponent {


    constructor( private router: Router) {

    }

    buscarHeroe(termino: string) {
        console.log(termino);
        this.router.navigate( ['/buscar', termino] );
    }
}