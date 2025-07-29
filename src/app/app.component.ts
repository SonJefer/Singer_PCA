import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

    constructor(private router: Router) { }


   ngOnInit() {
    let existeIntro = localStorage.getItem('intro');
    if (existeIntro === 'true') {
      const hasLogin = localStorage.getItem('login');
      if (hasLogin === 'true') {
        this.router.navigateByUrl('tabs/home', { replaceUrl: true });
      }else{
        this.router.navigateByUrl('/login', { replaceUrl: true });
      }
    } else {
      this.router.navigateByUrl('', { replaceUrl: true });
    }

  }

  
}
