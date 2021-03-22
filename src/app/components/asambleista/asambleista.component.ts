import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AsambleistaModel } from '../../models/asambleista.interface';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-asambleista',
  templateUrl: './asambleista.component.html',
  styleUrls: ['./asambleista.component.css']
})
export class AsambleistaComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};

  dtTrigger = new Subject<any>();

  cargando = false;

  asambleistas: AsambleistaModel[];

  constructor( private AuthService: AuthService, private router: Router) { }
 
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    };
  
    this.cargando = true; 
    this.AuthService.getAsambleistas()
      .subscribe( resp => {
        this.asambleistas = resp; 
        this.cargando = false; 
        //console.log(resp)
        this.dtTrigger.next();
      });
   
  }

    ngOnDestroy(): void {
    
    this.dtTrigger.unsubscribe();
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