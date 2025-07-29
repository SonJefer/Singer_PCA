import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GatewayService } from './gateway.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor(private gatewayServices: GatewayService) { }


  public verTodosLosArtistas(): Observable<any> {
    return this.gatewayServices.get<any>(`artists`);
  }

   public verMusica(id: number): Observable<any> {
    return this.gatewayServices.get<any>(`tracks/artist/${id}`);
  }

  public detalleArtista(id:number): Observable<any> {
    return this.gatewayServices.get<any>(`/artists/${id}`);
  }
}
