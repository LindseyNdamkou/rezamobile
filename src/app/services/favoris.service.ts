import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { __param } from 'tslib';


@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  private serverUrl= "http://localhost:3000/api/route/favoris";

  constructor(private http: HttpClient) {}

  public ajouterfavoris(favorisSalle: any): Observable<[]> {
    return this.http.get<[]>(this.serverUrl+ "/ajouterfavoris");
  }

}