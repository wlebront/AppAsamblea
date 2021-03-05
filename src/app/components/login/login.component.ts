import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.usuario = new UsuarioModel(); 
    
    if ( localStorage.getItem('nombre') ) {
     this.usuario.usuario = localStorage.getItem('nombre');
     this.recordarme = true;
    }
   
  }


  login( form: NgForm ){

    if ( form.invalid ) { return; }

    Swal.fire({  
      allowOutsideClick: false, 
      icon: 'info', 
      text: 'Espera por Favor..'
    });
       Swal.showLoading();
       
    this.auth.login( this.usuario )
   .subscribe( resp  => {

    //console.log(resp)
    Swal.close();

    if ( this.recordarme ) {
      localStorage.setItem('nombre', this.usuario.usuario);
    }
    
    this.router.navigateByUrl('/dashboard');
    
  }, (error) => {
    
    console.log(error.error.title);
    Swal.fire({  
      icon: 'error', 
      title: 'El nombre de usuario y la contraseña que ingresaste no coinciden. Revisa e inténtalo de nuevo.',
      text: error.error.title
    });
  });
   
   
}

}
