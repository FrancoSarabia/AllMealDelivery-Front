import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // loginForm: FormGroup;
  // submitted = false;

  // constructor(private formBuilder: FormBuilder, private router: Router) {
  //   // Inicializar el formulario reactivo
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required]
  //   });
  // }

  // // Método que se ejecuta cuando el formulario es enviado
  // onSubmit() {
  //   this.submitted = true;

  //   // Si el formulario es inválido, no hacer nada
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   // Obtener los valores del formulario
  //   const email = this.loginForm.controls.email.value;
  //   const password = this.loginForm.controls.password.value;

  //   // Simular un login exitoso
  //   console.log('Login exitoso', { email, password });

  //   // Redirigir a la página principal después del login
  //   this.router.navigate(['/home']);
  // }
}
