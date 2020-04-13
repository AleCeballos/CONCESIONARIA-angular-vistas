//clase

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
//import { User } from 'src/app/models/user';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';





//selector es la etiqueta donde se va a cargar el componente  private _route: ActivatedRoute, 
// private _router:Router
//template a que vista va a dar soporte el componete

@Component({
selector:'login',
templateUrl:'./login.component.html',
providers:[UserService]
})


//
export class LoginComponent implements OnInit{

    public title: string;
    public user:User;
    constructor(

       private _userService: UserService
    ){

        this.title = 'Identificate';
        this.user = new User(1,'ROLE_USER','','','','');
    }

ngOnInit(){

    console.log('login.component cargado correctamente!!');
}
onSubmit(form){
console.log(this.user);

this._userService.signup(this.user).subscribe(

    response =>{
        console.log(response);

    },
    error=>{
            console.log(<any>error);

    }
);
}

}