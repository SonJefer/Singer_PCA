import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eye, lockClosed, logoGoogle, logoFacebook } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule ]
})
export class RegisterPage implements OnInit {
  miFormulario: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private alertController: AlertController) {
    this.miFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    addIcons({ eye, lockClosed, logoGoogle, logoFacebook });
  }

   submit() {
    if (this.miFormulario.valid) {
      console.log('✅ Formulario válido:', this.miFormulario.value);
      let email = this.miFormulario.get('email')?.value;
      let password = this.miFormulario.get('password')?.value;
      let apellido = this.miFormulario.get('apellido')?.value;
      let nombre = this.miFormulario.get('nombre')?.value;
      let usuario = {
        user: {
          "email": email,
          "password": password,
          "name": nombre,
          "username": apellido
        }
      }
      this.authService.signup(usuario).subscribe({
        next: (data) => {
          localStorage.setItem('login', 'true');
          this.router.navigateByUrl('/login', { replaceUrl: true });
        },
        error: async (error) => {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Datos de los usuarios incorrectos.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });

    } else {
      console.log('❌ Formulario inválido');
      this.miFormulario.markAllAsTouched(); // Fuerza la visualización de errores
    }
  }

  ngOnInit() {
  }

  loginIr(){
    this.router.navigateByUrl('/login', { replaceUrl: true });

  }

}
