import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../Models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor( private auth: AuthService, 
              private router: Router ) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel(); 

  
  }

  onSubmit( form: NgForm){

    if ( form.invalid ) { return; }

    Swal.fire({  
      allowOutsideClick: false, 
      icon: 'info', 
      text: 'Espera por Favor..'
    });
       Swal.showLoading();

    this.auth.nuevoUsuario( this.usuario )
       .subscribe( resp => {
 
     //console.log(resp)
     Swal.close();

     if ( this.recordarme ) {
      localStorage.setItem('nombre', this.usuario.usuario);
    }
     
     this.router.navigateByUrl('/login');

    }, (error) => {

      //console.log(error.error);
      Swal.fire({  
        icon: 'error', 
        title: 'Error al registrar.',
        text: error.error
      });
     
     });


    }

}