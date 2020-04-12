//clase

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';





//selector es la etiqueta donde se va a cargar el componente  private _route: ActivatedRoute, 
// private _router:Router
//template a que vista va a dar soporte el componete

@Component({
selector:'register', //etiqueta para mostrar el componente
templateUrl:'./register.component.html'
})


//
export class RegisterComponent implements OnInit{

    public title: string;

    constructor(

       
    ){

        this.title = 'Registrate';
    }

ngOnInit(){

    console.log('register.component se ha cargado correctamente!!');
}

}