import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonTabBar, IonTabButton, IonTabs, IonLabel} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library, playCircle, search } from 'ionicons/icons';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs, CommonModule, FormsModule, IonLabel, RouterModule ]
})
export class TabsPage implements OnInit {

  constructor() { 
     addIcons({ library, playCircle, search });
  }

  ngOnInit() {
  }

}
