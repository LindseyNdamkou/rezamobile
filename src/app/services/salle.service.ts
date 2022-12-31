import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { __param } from 'tslib';


@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private serverUrl= "http://localhost:3000/api/route/salle";
  ville: any;
  constructor(private http: HttpClient) {}


  // public get serverUrlValue(): string {
  //   return this.serverUrl;
  // }

  public listeSalles(): Observable<[]> {
    return this.http.get<[]>(this.serverUrl+ "/allsalle");
  }
  public rechercherParVille(ville: string){
    return this.http.get(this.serverUrl +"/rechercherParVille/:ville"+ville);
  }
  public rechercherParQuartier(quartier: string) {
    return this.http.get(this.serverUrl +"/rechercherParQuartier/:quartier"+quartier);
  }

}
