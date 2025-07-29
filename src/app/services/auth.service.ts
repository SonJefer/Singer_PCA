import { Injectable } from '@angular/core';
import { GatewayService } from './gateway.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private gatewayServices: GatewayService) { }
    
  public login(user: any): Observable<any> {
    return this.gatewayServices.post<any>(
      '/login',
      user,
    );
  }

  public signup(user: any): Observable<any> {
    return this.gatewayServices.post<any>(
      '/signup',
      user,
    );
  }
}
