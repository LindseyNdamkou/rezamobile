import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private serverUrl= "http://localhost:3000/api/route/clientlog";
  private secondServerUrl = "http://localhost:3000/api/route/client";
  private jsonUrl = 'assets';

  constructor(private http: HttpClient) { 
    
  }

  public listeClients(): Observable<{}> {
    return this.http.get<{}>(this.serverUrl+'/allclients');
  }
  
  public EnregistrerClient(client_a_enregistrer: any):Observable<{}> {
    return this.http.post<{}>(this.serverUrl+'/createclient',client_a_enregistrer);
  }

  public login(login_info:{}): Observable<{}> {
    return this.http.post<{}>(this.serverUrl+'/loginclient',login_info);
  }
  public inscription(formulaire: any): Observable<{}> {
    return this.http.post<{}>(this.serverUrl+'/signupclient',formulaire);
  }

  public Sexe(): Observable<[]> {
    return this.http.get<[]>(this.jsonUrl+'/sexe.json');
  }
  public StatutSalle(): Observable<[]> {
    return this.http.get<[]>(this.jsonUrl+'/statutsalle.json');
  }
  public TypeUser(): Observable<[]> {
    return this.http.get<[]>(this.jsonUrl+'/typeuser.json');
  }

  public recherClientParSonId(idClient:string): Observable<{}>{
    return this.http.get<{}>(this.secondServerUrl+'/rechercherClientParId/'+idClient);
  }
  

}
