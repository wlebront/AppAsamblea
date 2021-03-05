import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AsambleistaModel } from '../../models/asambleista.interface';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
 
})
export class EditarComponent implements OnInit {

  asambleista: AsambleistaModel = new AsambleistaModel();


  constructor( private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  guardar(form: NgForm) {

    if ( form.invalid ){
       console.log('Formulario no valido');
       return;
    }

    Swal.fire({  
      
      title:'Espere',
      icon: 'info', 
      text: 'Guardando Asambleista..',
      allowOutsideClick: false, 
    });
    Swal.showLoading();

     
    let peticion: Observable<any>;


    if ( this.asambleista.id ) {
    peticion = this.AuthService.actualizarAsambleista( this.asambleista );

    }else{
    peticion =  this.AuthService.crearAsambleista( this.asambleista );
    
    }

    peticion.subscribe( resp => {
      Swal.fire({  
      
        title:'El asambleista',
        icon: 'success', 
        text: 'Se guardo correctamente..',
      });


    });

}


}

