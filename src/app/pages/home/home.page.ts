import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { contrastOutline, logoIonic } from 'ionicons/icons';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonIcon, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  slider_artista_content = [
    
    {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/BillieEilishO2160622_%2819_of_45%29_%2852153214339%29_%28cropped_3%29.jpg/960px-BillieEilishO2160622_%2819_of_45%29_%2852153214339%29_%28cropped_3%29.jpg",
    title: "Prueba 1",
    subtitle: ""

    }
  ]
  constructor() {
    addIcons({ logoIonic, contrastOutline });
  }
}
