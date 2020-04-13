import { Injectable } from '@angular/core'; //decordor
import { HttpClient, HttpHeaders } from '@angular/common/http'; //editar cabecera
//import { Observable} from 'rxjs/Observable'; respuestas del servicio rest del backend
import { GLOBAL} from './global';
//import { Observable } from 'rxjs';
import { Observable } from 'rxjs';


import{User} from '../models/user';

@Injectable()
export class UserService{

public url: string;
constructor(
    public _http:HttpClient
    ) {

        this.url = GLOBAL.url;
    }

  pruebas(){

    return "Hola mundo";
  }

  register(user):Observable<any>{

    let json =JSON.stringify(user);
    let params ='json='+json;
    let headers = new HttpHeaders().set('Content-Type','aplication/x-www-form-urlencoded');

    return this._http.post(this.url+'register', params, {headers:headers});
  }

  signup(user):Observable<any>{

    let json =JSON.stringify(user);
    let params ='json='+json;
    let headers = new HttpHeaders().set('Content-Type','aplication/x-www-form-urlencoded');

    return this._http.post(this.url+'login', params, {headers:headers});
  }
}