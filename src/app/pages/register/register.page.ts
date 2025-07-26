import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonButton,IonInput,IonItem,  IonLabel, IonList} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent,  CommonModule, FormsModule, IonButton,IonInput, IonItem,  IonLabel, IonList ]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
