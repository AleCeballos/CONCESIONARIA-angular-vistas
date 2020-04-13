//clase

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import{User} from '../../models/user'//modelo user
import{UserService} from '../../services/user.service'//modelo user




//selector es la etiqueta donde se va a cargar el componente  
//template a que vista va a dar soporte el componete

@Component({
selector:'register', //etiqueta para mostrar el componente
templateUrl:'./register.component.html',
providers:[UserService]
})


//
export class RegisterComponent implements OnInit{

    public title: string;
    public user: User; //objeto del usuario para enviar a la api
    public status: string;
    constructor(
         private _route: ActivatedRoute, 
         private _router:Router,
         private _userService: UserService   
    ){

        this.title = 'Registrate';
        this.user = new User(1,'ROLE_USER','','','','');
    }

ngOnInit(){

    console.log('register.component se ha cargado correctamente!!');
}

onSubmit(form){
   console.log(this.user);
   // console.log(this._userService.pruebas())
   this._userService.register(this.user).subscribe(
   response =>{
   
   if(response.status =='success'){

    this.status = response.status;

    //vaciar el formulario
    this.user = new User(1,'ROLE_USER','','','','');
   form.reset();
   }else{

    this.status = 'error';
   }
     
   },
   error=>{

    console.log(<any>error);
   }


   );
}

}