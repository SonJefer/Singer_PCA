import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eye, lockClosed, logoGoogle, logoFacebook } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule ]
})
export class RegisterPage implements OnInit {
  miFormulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    addIcons({ eye, lockClosed, logoGoogle, logoFacebook });
  }

   submit() {
    if (this.miFormulario.valid) {
      console.log('✅ Formulario válido:', this.miFormulario.value);
    } else {
      console.log('❌ Formulario inválido');
      this.miFormulario.markAllAsTouched(); // Fuerza la visualización de errores
    }
  }

  ngOnInit() {
  }

}
