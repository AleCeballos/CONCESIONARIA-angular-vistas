//clase

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';





//selector es la etiqueta donde se va a cargar el componente  private _route: ActivatedRoute, 
// private _router:Router
//template a que vista va a dar soporte el componete

@Component({
selector:'login',
templateUrl:'./login.component.html'
})


//
export class LoginComponent implements OnInit{

    public title: string;

    constructor(

       
    ){

        this.title = 'Identificate';
    }

ngOnInit(){

    console.log('login.component cargado correctamente!!');
}

}