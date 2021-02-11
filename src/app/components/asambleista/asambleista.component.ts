import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AsambleistaModel } from '../../models/asambleista.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-asambleista',
  templateUrl: './asambleista.component.html',
  styleUrls: ['./asambleista.component.css']
})
export class AsambleistaComponent implements OnInit {
 cargando = false;

pageActual: number=1;

asambleistas: AsambleistaModel[];

  constructor( private AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {


  

this.cargando = true; 
this.AuthService.getAsambleistas()
      .subscribe( resp => {
        this.asambleistas = resp; 
        this.cargando = false; 
        //console.log(resp)
      });

   
  }


 /* buscarAsambleista(termino:string){
    this.AuthService.buscarAsambleista()
    .subscribe(res => this.asambleistas = res);
     console.log( termino)

  }  */



  verPerfil(id) {
this.router.navigate(['perfil/', id]);
//console.log( id )
  }

}