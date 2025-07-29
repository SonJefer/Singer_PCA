import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { contrastOutline, logoIonic, contrast, tv, exit } from 'ionicons/icons';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArtistasService } from 'src/app/services/artistas.service';
import { Route, Router } from '@angular/router';
import { IonModal, IonIcon, IonItem, IonList, IonLabel, IonMenuButton, IonButton, IonMenu, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent } from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { play, pause } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ CommonModule, IonButton, IonMenuButton, IonList, IonIcon, IonLabel, IonItem, IonContent, IonMenu, IonToolbar, IonHeader, IonButtons, IonTitle,  IonModal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  listarArtistar:any[] = [];
  listadoCanciones:any[] = [];

  modoOscuro = false;

    @ViewChild(IonModal) modal!: IonModal;

 name: string = '';
  message = 'Este modal se activa al hacer clic en un artista.';

  audio = new Audio(); // objeto global
cancionReproduciendo: boolean = false;
nombreCancionActual: string = '';
progreso: number = 0;
tiempoActual: string = '0:00';
duracion: number = 0;


  constructor(private artistasService: ArtistasService, private router: Router) {
    addIcons({ logoIonic, contrastOutline, contrast, tv, exit, play, pause });
  }

   ngOnInit() {
    this.artistasService.verTodosLosArtistas().subscribe((data) => {
      this.listarArtistar = data;
      console.log("this.listarArtistar", this.listarArtistar);


    });

   }

   IntroPage(){
          this.router.navigateByUrl('/');

   }

   cambiarModoOscuro() {
    this.modoOscuro = !this.modoOscuro;
    document.body.classList.toggle('modoOscuro', this.modoOscuro);

  }

   cerrarSesion(){
    console.log("cerrarSesion");
      localStorage.setItem('login', 'false');
      this.router.navigateByUrl('/login', { replaceUrl: true });
   }

 verartista(artista: any) {
  this.artistasService.verMusica(artista.id).subscribe((data) => {
      this.listadoCanciones = data;
      console.log("this.listadoCanciones", this.listadoCanciones);


    });
  this.name = artista.name;  
  this.modal.present();
}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hola, ${event.detail.data}!`;
    }
  }
  
  reproducirCancion(cancion: any) {
  const url = cancion.preview_url;

  if (this.audio.src !== url) {
    this.detenerCancion(); // Detener canción anterior si la hay
    this.audio = new Audio(url);
    this.audio.load();
    this.audio.play();

    this.nombreCancionActual = cancion.name;
    this.cancionReproduciendo = true;

    // Al cargar metadata, obtener duración
    this.audio.addEventListener('loadedmetadata', () => {
      this.duracion = Math.floor(this.audio.duration);
    });

    // Actualizar progreso cada segundo
    this.audio.addEventListener('timeupdate', () => {
      this.progreso = Math.floor(this.audio.currentTime);
      this.tiempoActual = this.formatearTiempo(this.audio.currentTime);
    });

    // Cuando termina la canción
    this.audio.addEventListener('ended', () => {
      this.detenerCancion();
    });
  } else {
    this.togglePlayPause(); // Si se hace clic en la misma, alternar play/pause
  }

  
}

formatearTiempo(segundos: number): string {
  const min = Math.floor(segundos / 60);
  const sec = Math.floor(segundos % 60);
  return `${min}:${sec < 10 ? '0' + sec : sec}`;
}


detenerCancion() {
  this.audio.pause();
  this.audio.currentTime = 0;
  this.cancionReproduciendo = false;
  this.nombreCancionActual = '';
  this.progreso = 0;
  this.tiempoActual = '0:00';
}

togglePlayPause() {
  console.log(this.audio.paused);
  if (this.audio.paused) {
    this.audio.play();
  } else {
    this.audio.pause();
  }
}


}
