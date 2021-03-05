import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AsambleistaModel } from '../../models/asambleista.interface';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  
})
export class FotosComponent implements OnInit {

nuevasFotos: AsambleistaModel[];


  constructor( private AuthService: AuthService) { }

  ngOnInit(): void {
    this.AuthService.getFotos()
         .subscribe( resp => {
           //console.log( resp );
           this.nuevasFotos = resp;  
         });  
  }
  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' + img;
}
}
