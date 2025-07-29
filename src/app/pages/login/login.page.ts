import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eye, lockClosed, logoGoogle, logoFacebook } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  miFormulario: FormGroup;
  alertButtons = ['Action'];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private alertController: AlertController) {
    this.miFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    addIcons({ eye, lockClosed, logoGoogle, logoFacebook });
  }

  async submit() {
    if (this.miFormulario.valid) {
      let email = this.miFormulario.get('email')?.value;
      let password = this.miFormulario.get('password')?.value;
      let usuario = {
        user: {
          "email": email,
          "password": password
        }
      }
      this.authService.login(usuario).subscribe({
        next: (data) => {
          localStorage.setItem('login', 'true');
          this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
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
      this.miFormulario.markAllAsTouched();
    }
  }

  ngOnInit() {
  }

  registroIr(){
    this.router.navigateByUrl('/register', { replaceUrl: true });

  }

}
