import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AsambleistaModel } from '../models/asambleista.interface';
import { UsuarioModel } from '../models/usuario.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'api';
  _apiUrl;

  

  userToken: string;



constructor( private http: HttpClient ) { 

   this._apiUrl = environment.apiBaseUrl;


  this.leerToken(); 

}

logout() {
localStorage.removeItem('token');
 
  
  }
  
  login( usuario: UsuarioModel) {
  
    const authData = {
      usuario: usuario.usuario,
      password: usuario.password,
      returnSecureToken: true
      
      };

      return this.http.post(
        this._apiUrl + `${ this.url }/usuarios/login`,
        authData  
        ).pipe(
          map( resp => {
            this.guardarToken( resp['idToken'] );
            return resp;
          })
        );
        
      
}

nuevoUsuario( usuario: UsuarioModel){

  const authData = {
  usuario: usuario.usuario ,
  password: usuario.password,
  returnSecureToken: true
  
  };

  return this.http.post(this._apiUrl +
  `${ this.url }/usuarios/registro`,
  authData  
  ).pipe(
    map( resp => {
      this.guardarToken( resp['idToken'] );
      return resp;
    })
  );
  
  
  }

  private guardarToken( idToken: string ) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  
  }

  leerToken() {

    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
   } else {
      this.userToken = '';
   }
   
   return this.userToken; 
   
   }

   estaAutenticado(): boolean {

    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
    
    }

     /*buscador tabla asambleista
    buscarAsambleista( ){

        const headers = new HttpHeaders({
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJ3aWxsaWFtIiwibmJmIjoxNjEyMTM3NzczLCJleHAiOjE5Mjc2NzA1NzMsImlhdCI6MTYxMjEzNzc3M30.-qPITqn59p_ptYJ6bXlUk5y4EuzYePuk0wSP8IQ76-CQS195dPBiwkS8hsdZciummcWIPaPrX-uqjj-HOJ-jIg'
        });
        return this.http.get<AsambleistaModel[]>(this._apiUrl + `${ this.url }/asambleistas`, {headers });

    }*/

    getAsambleistas() {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJ3aWxsaWFtIiwibmJmIjoxNjEyMTM3NzczLCJleHAiOjE5Mjc2NzA1NzMsImlhdCI6MTYxMjEzNzc3M30.-qPITqn59p_ptYJ6bXlUk5y4EuzYePuk0wSP8IQ76-CQS195dPBiwkS8hsdZciummcWIPaPrX-uqjj-HOJ-jIg'
      });
      return this.http.get<AsambleistaModel[]>(this._apiUrl + `${ this.url }/asambleistas`, {headers });

    }

    crearAsambleista( asambleista: AsambleistaModel) {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJ3aWxsaWFtIiwibmJmIjoxNjEyMTM3NzczLCJleHAiOjE5Mjc2NzA1NzMsImlhdCI6MTYxMjEzNzc3M30.-qPITqn59p_ptYJ6bXlUk5y4EuzYePuk0wSP8IQ76-CQS195dPBiwkS8hsdZciummcWIPaPrX-uqjj-HOJ-jIg'
      });
      return this.http.post<AsambleistaModel[]>(this._apiUrl + `${ this.url }/asambleistas`, asambleista, {headers })
             .pipe(
               map( (resp: any) => {
                 asambleista.id =resp.id;
                 return asambleista;
               })
               
             )

}

actualizarAsambleista( asambleista: AsambleistaModel) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJ3aWxsaWFtIiwibmJmIjoxNjEyMTM3NzczLCJleHAiOjE5Mjc2NzA1NzMsImlhdCI6MTYxMjEzNzc3M30.-qPITqn59p_ptYJ6bXlUk5y4EuzYePuk0wSP8IQ76-CQS195dPBiwkS8hsdZciummcWIPaPrX-uqjj-HOJ-jIg'
  });
  return this.http.patch(this._apiUrl + `${ this.url }/asambleistas/${ asambleista.id }`, asambleista,{headers })   
         
   }

   getFotos() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJ3aWxsaWFtIiwibmJmIjoxNjEyMTM3NzczLCJleHAiOjE5Mjc2NzA1NzMsImlhdCI6MTYxMjEzNzc3M30.-qPITqn59p_ptYJ6bXlUk5y4EuzYePuk0wSP8IQ76-CQS195dPBiwkS8hsdZciummcWIPaPrX-uqjj-HOJ-jIg'
    });
    return this.http.get<AsambleistaModel[]>(this._apiUrl + `${ this.url }/asambleistas`, {headers });

  }
 
  getAsambleista( id: string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJ3aWxsaWFtIiwibmJmIjoxNjEyMTM3NzczLCJleHAiOjE5Mjc2NzA1NzMsImlhdCI6MTYxMjEzNzc3M30.-qPITqn59p_ptYJ6bXlUk5y4EuzYePuk0wSP8IQ76-CQS195dPBiwkS8hsdZciummcWIPaPrX-uqjj-HOJ-jIg'
    });
    return this.http.get(this._apiUrl + `${ this.url }/asambleistas/${id }`, {headers });
  }


  }

  