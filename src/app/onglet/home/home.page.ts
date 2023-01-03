
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ClientService } from "src/app/services/client.service";
import { SalleService } from "src/app/services/salle.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  
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

  listeSalle : any;
  salleService: any;
  listfav: any;
  searchville : String = "";
  idFav: any;
  detailsalle: any;
  idSalle:any
  idFavoris: any;
  listsalle : any =[];
  cachedListSalle =[] 
  statut:any=undefined
  formsearchVille = FormGroup;
  searchbarValue:String = ""
  formsearch: FormGroup | undefined ;

  constructor(private salle: SalleService,private router: Router,private clientService: ClientService) {}

  ngOnInit(): void {
    this.afficherSalles();

    this.formsearch = new FormGroup({
      motcle: new FormControl(null, [Validators.required]),
    });

    // this.formsearchVille = new FormGroup({
    //   motcle1: new FormControl(null, [Validators.required]),
    // });

  }

  async afficherSalles(){
      this.salle.listeSalles().subscribe((rep) => {
        this.listeSalle = rep;
        this.cachedListSalle = rep;
        console.log(rep);
      });
    }

    AjouterFav(idFavoris:any){
      localStorage.setItem("favoris", JSON.stringify(idFavoris));
      console.log(idFavoris)
      this.router.navigate(['onglet/favoris']);
  }

  DetailSalle(detailsalle:any){
    localStorage.setItem("detailsalle", JSON.stringify(detailsalle));
    console.log(detailsalle)
    this.router.navigate(['onglet/details']);
}

  // rechercher(){
  //   const listeSalle:any[] = this.cachedListSalle.filter((salle:any)=>{
  //     return salle.nomSalle.toUpperCase().includes(this.searchbarValue.toUpperCase())
  //   })
  //   this.listsalle = listeSalle
  //  }


   comparerville(salle : any , searchville:any) {
    console.log(salle.ville, 'rech = '+searchville, 'resultat = '+salle.ville == searchville, this.searchville)
    return salle.ville == searchville;

  }

  rechercherville(){
    this.listeSalle = this.cachedListSalle.filter((elt : any) => {
      return this.comparerville(elt,this.searchville);
    });
  }

  rechercherVille(event:any){
    // console.log(this.searchville, event.target.value)
    const listeSalle:any[] = this.cachedListSalle.filter((salle:any)=>{
      return salle.ville.toUpperCase().includes(this.searchville.toUpperCase()) || salle.quartier.toUpperCase().includes(this.searchville.toUpperCase())
      // return this.salle.ville.toUpperCase().includes(this.searchbarValue.toUpperCase())
    })
    this.listeSalle = listeSalle
   }

CouleurStatut(){
  if(this.statut.statutSalle == 'disponible'){
    var message = document.getElementById('status')
    
  }
  else {}
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

 
