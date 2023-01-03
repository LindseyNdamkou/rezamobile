import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  idEtTokenClient:any
  infosClient:any = {
    "_id": "",
    "firstname": "",
    "lastname": "",
    "email": "",
    "sex": "",
    "phone": "",
    "role": "2",
    "password": "",
    "__v": 0
};
  constructor(private clientService: ClientService) {
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.idEtTokenClient = JSON.parse(localStorage.getItem('infoClient')!);
    this.clientService.recherClientParSonId(this.idEtTokenClient.clientId).subscribe((client)=>{
      //client represente les infos du client. On garde dans la variable infosClient. C'est ce qu'on va afficher sur le front
      this.infosClient=client
      console.log(this.infosClient)
    },
    (error)=>{
      console.log(error.error)
    })
  }

}
