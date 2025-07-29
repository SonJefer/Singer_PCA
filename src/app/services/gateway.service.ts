import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

   constructor(private http: HttpClient) { }
  public get<T>(url: string): Observable<T> {
    const urlApi = "https://music.fly.dev/";
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<any>(urlApi + url, httpOptions).pipe(map((r) => r));
  }

  public post<T>(url: string, data: any): Observable<T> {
    const urlApi = "https://music.fly.dev/";
      
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    return this.http.post<any>(urlApi + url, data, httpOptions).pipe(map((r) => r));
  }
}
