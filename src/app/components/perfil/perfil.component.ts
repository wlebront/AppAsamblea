import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent{

  asambleista: any = {};


  constructor(private AuthService: AuthService, private router: ActivatedRoute ) { 
    
    this.router.params.subscribe( params => {

      this.getAsambleista( params['id'] );
    })
  }

  getAsambleista ( id: string){

    this.AuthService.getAsambleista(id)
         .subscribe( resp => {
           //console.log( resp );
           this.asambleista = resp;  
         });  
         
  }
  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' + img;
}

}
